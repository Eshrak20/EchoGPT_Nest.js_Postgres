import { BadGatewayException, HttpException, Injectable } from '@nestjs/common';
import {
  AIMessage,
  AIProvider,
  AIProviderResponse,
} from './ai-provider.interface.js';

@Injectable()
export class AnthropicProvider implements AIProvider {
  async generateResponse(
    messages: AIMessage[],
    modelId: string,
    apiKey: string,
    apiBaseUrl?: string | null,
  ): Promise<AIProviderResponse> {
    const baseUrl = apiBaseUrl || 'https://api.anthropic.com/v1';

    const systemMessages = messages
      .filter((message) => message.role === 'system')
      .map((message) => message.content)
      .join('\n');

    const conversationMessages = messages
      .filter((message) => message.role !== 'system')
      .map((message) => ({
        role: message.role,
        content: message.content,
      }));

    const response = await fetch(`${baseUrl}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: modelId,
        max_tokens: 1024,
        ...(systemMessages ? { system: systemMessages } : {}),
        messages: conversationMessages,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();

      console.error('Anthropic API Error:', {
        status: response.status,
        body: errorBody,
      });

      let errorMessage = 'Anthropic API request failed';

      try {
        const errorData = JSON.parse(errorBody);

        errorMessage =
          errorData?.error?.message ||
          errorData?.message ||
          errorMessage;
      } catch {
        // Keep default error message
      }

      throw new HttpException(
        {
          message: errorMessage,
          provider: 'Anthropic',
        },
        response.status,
      );
    }

    const data = await response.json();

    const content = data?.content?.[0]?.text;

    if (!content) {
      throw new BadGatewayException(
        'Anthropic returned an invalid response',
      );
    }

    return {
      content,
    };
  }
}