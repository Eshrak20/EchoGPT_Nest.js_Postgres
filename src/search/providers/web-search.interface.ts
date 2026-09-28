export interface WebSearchResult {
    title: string;
    url: string;
    content: string;
    score?: number;
}

export interface WebSearchResponse {
    query: string;
    results: WebSearchResult[];
}

export interface WebSearchProvider {
    search(
        query: string,
        limit: number,
    ): Promise<WebSearchResponse>;
}