import {
    BadGatewayException,
    GatewayTimeoutException,
    Injectable,
} from '@nestjs/common';

import {
    AIMessage,
    AIProvider,
    AIProviderResponse,
} from './ai-provider.interface.js';

@Injectable()
export class GoogleProvider implements AIProvider {
    async generateResponse(
        messages: AIMessage[],
        modelId: string,
        apiKey: string,
        apiBaseUrl?: string | null,
    ): Promise<AIProviderResponse> {
        const baseUrl =
            apiBaseUrl ||
            'https://generativelanguage.googleapis.com/v1beta';

        const url = `${baseUrl}/models/${modelId}:generateContent`;

        const contents = messages
            .filter((message) => message.role !== 'system')
            .map((message) => ({
                role:
                    message.role === 'assistant'
                        ? 'model'
                        : 'user',
                parts: [
                    {
                        text: message.content,
                    },
                ],
            }));

        console.log('Gemini URL:', url);
        console.log('Gemini model:', modelId);

        let response: Response;

        try {
            response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-goog-api-key': apiKey,
                },
                body: JSON.stringify({
                    contents,
                }),
                signal: AbortSignal.timeout(30_000),
            });
        } catch (error) {
            console.error('Gemini request failed:', error);

            if (
                error instanceof Error &&
                (
                    error.name === 'TimeoutError' ||
                    error.name === 'AbortError' ||
                    error.message.includes('Headers Timeout')
                )
            ) {
                throw new GatewayTimeoutException(
                    'Google Gemini request timed out. Please try again later.',
                );
            }

            throw new BadGatewayException(
                'Unable to connect to Google Gemini',
            );
        }

        const data = await response.json();

        console.log('Gemini status:', response.status);

        if (!response.ok) {
            console.error('Gemini API error:', data);

            throw new BadGatewayException(
                data?.error?.message ||
                'Failed to generate response from Google Gemini',
            );
        }

        const content =
            data?.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!content) {
            console.error(
                'Unexpected Gemini response:',
                data,
            );

            throw new BadGatewayException(
                'Google Gemini returned an invalid response',
            );
        }

        return {
            content,
        };
    }
    async generateStream(
        messages: AIMessage[],
        modelId: string,
        apiKey: string,
        apiBaseUrl?: string | null,
        onChunk?: (chunk: string) => void,
    ): Promise<void> {
        const baseUrl =
            apiBaseUrl ||
            'https://generativelanguage.googleapis.com/v1beta';

        const url =
            `${baseUrl}/models/${modelId}:streamGenerateContent` +
            `?alt=sse`;

        const contents = messages
            .filter((message) => message.role !== 'system')
            .map((message) => ({
                role:
                    message.role === 'assistant'
                        ? 'model'
                        : 'user',
                parts: [
                    {
                        text: message.content,
                    },
                ],
            }));

        let response: Response;

        try {
            response = await fetch(url, {
                method: 'POST',

                headers: {
                    'Content-Type': 'application/json',
                    'x-goog-api-key': apiKey,
                },

                body: JSON.stringify({
                    contents,
                }),

                signal: AbortSignal.timeout(30_000),
            });
        } catch (error) {
            console.error('Gemini streaming request failed:', error);

            throw new GatewayTimeoutException(
                'Google Gemini streaming request timed out.',
            );
        }

        if (!response.ok || !response.body) {
            const data = await response.text();

            console.error('Gemini streaming error:', data);

            throw new BadGatewayException(
                'Failed to start Google Gemini streaming response',
            );
        }

        const reader = response.body.getReader();

        const decoder = new TextDecoder();

        let buffer = '';

        try {
            while (true) {
                const { done, value } = await reader.read();

                if (done) {
                    break;
                }

                buffer += decoder.decode(value, {
                    stream: true,
                });

                const lines = buffer.split('\n');

                buffer = lines.pop() || '';

                for (const line of lines) {
                    if (!line.startsWith('data: ')) {
                        continue;
                    }

                    const json = line.substring(6).trim();

                    if (!json || json === '[DONE]') {
                        continue;
                    }

                    try {
                        const data = JSON.parse(json);

                        const text =
                            data?.candidates?.[0]?.content?.parts?.[0]?.text;

                        if (text && onChunk) {
                            onChunk(text);
                        }
                    } catch (error) {
                        console.error(
                            'Failed to parse Gemini stream chunk:',
                            error,
                        );
                    }
                }
            }
        } finally {
            reader.releaseLock();
        }
    }
}