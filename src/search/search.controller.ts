import {
    Controller,
    Get,
    Query,
    Req,
    UseGuards,
} from '@nestjs/common';

import {
    ApiBearerAuth,
    ApiOperation,
    ApiQuery,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';

import type { Request } from 'express';

import {
    JwtAuthGuard,
} from '../auth/guards/jwt-auth.guard.js';

import {
    SearchQueryDto,
} from './dto/search-query.dto.js';

import {
    SearchService,
} from './search.service.js';

interface AuthenticatedRequest
    extends Request {
    user: {
        id: string;
    };
}

@ApiTags('Search')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard)
@Controller('search')
export class SearchController {
    constructor(
        private readonly searchService:
            SearchService,
    ) {}

    /*
     * --------------------------------
     * Search
     * --------------------------------
     */

    @Get()
    @ApiOperation({
        summary: 'Search the web',
    })
    @ApiResponse({
        status: 200,
        description:
            'Web search results returned successfully',
    })
    async search(
        @Req()
        req: AuthenticatedRequest,

        @Query()
        dto: SearchQueryDto,
    ) {
        return this.searchService.search(
            req.user.id,
            dto.q,
            dto.limit ?? 5,
        );
    }

    /*
     * --------------------------------
     * Search History
     * --------------------------------
     */

    @Get('history')
    @ApiOperation({
        summary:
            'Get current user search history',
    })
    @ApiResponse({
        status: 200,
        description:
            'Search history returned successfully',
    })
    async getHistory(
        @Req()
        req: AuthenticatedRequest,
    ) {
        return this.searchService.getHistory(
            req.user.id,
        );
    }

    /*
     * --------------------------------
     * Recent Searches
     * --------------------------------
     */

    @Get('recent')
    @ApiOperation({
        summary:
            'Get recent unique searches',
    })
    @ApiResponse({
        status: 200,
        description:
            'Recent searches returned successfully',
    })
    async getRecentSearches(
        @Req()
        req: AuthenticatedRequest,
    ) {
        return this.searchService.getRecentSearches(
            req.user.id,
        );
    }

    /*
     * --------------------------------
     * Search Suggestions
     * --------------------------------
     */

    @Get('suggestions')
    @ApiOperation({
        summary:
            'Get search suggestions',
    })
    @ApiQuery({
        name: 'q',
        required: true,
        example: 'nestjs',
        description:
            'Search text used for suggestions',
    })
    @ApiResponse({
        status: 200,
        description:
            'Search suggestions returned successfully',
    })
    async getSuggestions(
        @Req()
        req: AuthenticatedRequest,

        @Query('q')
        query: string,
    ) {
        return this.searchService.getSuggestions(
            req.user.id,
            query,
        );
    }
}