import {
    Injectable
} from '@nestjs/common';

import { Prisma } from '../generated/prisma/client.js';

import {
    PrismaService,
} from '../prisma/prisma.service.js';

import {
    TavilyProvider,
} from './providers/tavily.provider.js';

@Injectable()
export class SearchService {
    constructor(
        private readonly prisma: PrismaService,

        private readonly tavilyProvider:
            TavilyProvider,
    ) {}

    /*
     * --------------------------------
     * Search
     * --------------------------------
     */

    async search(
        userId: string,
        query: string,
        limit: number = 5,
    ) {
        const cleanQuery =
            query.trim();

        const normalizedQuery =
            cleanQuery.toLowerCase();

        /*
         * Cache key includes query + limit.
         *
         * Example:
         *
         * nestjs:5
         * nestjs:10
         */
        const cacheKey =
            `${normalizedQuery}:${limit}`;

        /*
         * 1. Check cache
         */

        const cached =
            await this.prisma.searchCache.findUnique({
                where: {
                    cacheKey,
                },
            });

        if (
            cached &&
            cached.expiresAt > new Date()
        ) {
            await this.saveSearchHistory(
                userId,
                cleanQuery,
            );

            return {
                query: cleanQuery,
                results: cached.results,
                cached: true,
            };
        }

        /*
         * 2. Search external provider
         */

        const result =
            await this.tavilyProvider.search(
                cleanQuery,
                limit,
            );

        /*
         * 3. Save search history
         */

        await this.saveSearchHistory(
            userId,
            cleanQuery,
        );

        /*
         * 4. Save search result cache
         */

        const expiresAt = new Date(
            Date.now() +
                10 * 60 * 1000,
        );

        const resultsJson =
            result.results as unknown as
                Prisma.InputJsonValue;

        await this.prisma.searchCache.upsert({
            where: {
                cacheKey,
            },

            create: {
                cacheKey,
                query: normalizedQuery,
                results: resultsJson,
                expiresAt,
            },

            update: {
                query: normalizedQuery,
                results: resultsJson,
                expiresAt,
            },
        });

        return {
            ...result,
            cached: false,
        };
    }

    /*
     * --------------------------------
     * Search History
     * --------------------------------
     */

    async getHistory(
        userId: string,
    ) {
        return this.prisma.searchHistory.findMany({
            where: {
                userId,
            },

            orderBy: {
                createdAt: 'desc',
            },

            take: 50,

            select: {
                id: true,
                query: true,
                createdAt: true,
            },
        });
    }

    /*
     * --------------------------------
     * Recent Searches
     * --------------------------------
     */

    async getRecentSearches(
        userId: string,
    ) {
        const history =
            await this.prisma.searchHistory.findMany({
                where: {
                    userId,
                },

                orderBy: {
                    createdAt: 'desc',
                },

                take: 50,

                select: {
                    query: true,
                    createdAt: true,
                },
            });

        const seen =
            new Set<string>();

        const recentSearches: {
            query: string;
            createdAt: Date;
        }[] = [];

        for (const item of history) {
            const normalized =
                item.query
                    .trim()
                    .toLowerCase();

            if (
                seen.has(normalized)
            ) {
                continue;
            }

            seen.add(normalized);

            recentSearches.push({
                query: item.query,
                createdAt:
                    item.createdAt,
            });

            if (
                recentSearches.length >= 10
            ) {
                break;
            }
        }

        return recentSearches;
    }

    /*
     * --------------------------------
     * Search Suggestions
     * --------------------------------
     */

    async getSuggestions(
        userId: string,
        query: string,
    ) {
        const cleanQuery =
            query.trim();

        if (!cleanQuery) {
            return [];
        }

        const normalizedQuery =
            cleanQuery.toLowerCase();

        const history =
            await this.prisma.searchHistory.findMany({
                where: {
                    userId,
                },

                orderBy: {
                    createdAt: 'desc',
                },

                take: 100,

                select: {
                    query: true,
                },
            });

        const suggestions: string[] =
            [];

        const seen =
            new Set<string>();

        for (const item of history) {
            const normalized =
                item.query
                    .trim()
                    .toLowerCase();

            if (
                !normalized.includes(
                    normalizedQuery,
                )
            ) {
                continue;
            }

            if (
                seen.has(normalized)
            ) {
                continue;
            }

            seen.add(normalized);

            suggestions.push(
                item.query,
            );

            if (
                suggestions.length >= 5
            ) {
                break;
            }
        }

        return suggestions;
    }

    /*
     * --------------------------------
     * Save Search History
     * --------------------------------
     */

    private async saveSearchHistory(
        userId: string,
        query: string,
    ) {
        return this.prisma.searchHistory.create({
            data: {
                userId,
                query: query.trim(),
            },
        });
    }
}