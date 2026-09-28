export interface AIMessage {
    role: 'system' | 'user' | 'assistant';
    content: string;
}

export interface AIProviderResponse {
    content: string;
}

export interface AIProvider {
    generateResponse(
        messages: AIMessage[],
        modelId: string,
        apiKey: string,
        apiBaseUrl?: string | null,
    ): Promise<AIProviderResponse>;
}