import {
    BadGatewayException,
    Injectable,
    InternalServerErrorException,
} from '@nestjs/common';

import {
    WebSearchProvider,
    WebSearchResponse,
} from './web-search.interface.js';

@Injectable()
export class TavilyProvider
    implements WebSearchProvider
{
    private readonly apiUrl =
        'https://api.tavily.com/search';

    async search(
        query: string,
        limit: number,
    ): Promise<WebSearchResponse> {
        const apiKey =
            process.env.TAVILY_API_KEY;

        if (!apiKey) {
            throw new InternalServerErrorException(
                'Tavily API key is not configured',
            );
        }

        let response: Response;

        try {
            response = await fetch(
                this.apiUrl,
                {
                    method: 'POST',

                    headers: {
                        'Content-Type':
                            'application/json',
                    },

                    body: JSON.stringify({
                        api_key: apiKey,
                        query,
                        max_results: limit,
                        search_depth: 'basic',
                    }),

                    signal:
                        AbortSignal.timeout(
                            15_000,
                        ),
                },
            );
        } catch (error) {
            console.error(
                'Tavily request failed:',
                error,
            );

            throw new BadGatewayException(
                'Unable to connect to web search provider',
            );
        }

        const data = await response.json();

        if (!response.ok) {
            console.error(
                'Tavily API error:',
                data,
            );

            throw new BadGatewayException(
                data?.detail ||
                    'Web search provider returned an error',
            );
        }

        return {
            query,
            results: (data.results || []).map(
                (result: any) => ({
                    title: result.title,
                    url: result.url,
                    content: result.content,
                    score: result.score,
                }),
            ),
        };
    }
}