import { BadGatewayException, Injectable } from '@nestjs/common';
import {
  AIMessage,
  AIProvider,
  AIProviderResponse,
} from './ai-provider.interface.js';

@Injectable()
export class OpenAIProvider implements AIProvider {
  async generateResponse(
    messages: AIMessage[],
    modelId: string,
    apiKey: string,
    apiBaseUrl?: string | null,
  ): Promise<AIProviderResponse> {
    const baseUrl = (
      apiBaseUrl || 'https://api.openai.com/v1'
    ).replace(/\/$/, '');

    const response = await fetch(`${baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: modelId,
        messages,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();

      console.error('OpenAI API Error:', {
        status: response.status,
        body: errorBody,
      });

      let errorMessage = 'OpenAI API request failed';

      try {
        const errorData = JSON.parse(errorBody);

        errorMessage =
          errorData?.error?.message ||
          errorData?.message ||
          errorMessage;
      } catch {
        // Ignore JSON parsing error
      }

      throw new BadGatewayException(errorMessage);
    }

    const data = await response.json();

    const content = data?.choices?.[0]?.message?.content;

    if (!content) {
      console.error('Invalid OpenAI response:', data);

      throw new BadGatewayException(
        'OpenAI returned an invalid response',
      );
    }

    return {
      content,
    };
  }
}