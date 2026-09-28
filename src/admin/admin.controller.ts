import {
    Controller,
    Get,
    Query,
    UseGuards,
} from '@nestjs/common';

import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags
} from '@nestjs/swagger';

import {
    JwtAuthGuard,
} from '../auth/guards/jwt-auth.guard.js';

import {
    RolesGuard,
} from '../auth/guards/roles.guard.js';

import {
    Roles,
} from '../auth/decorators/roles.decorator.js';

import {
    AdminService,
} from './admin.service.js';

import {
    AdminQueryDto,
} from './dto/admin-query.dto.js';

@ApiTags('Admin')
@ApiBearerAuth('access-token')
@UseGuards(
    JwtAuthGuard,
    RolesGuard,
)
@Roles('ADMIN')
@Controller('admin')
export class AdminController {
    constructor(
        private readonly adminService:
            AdminService,
    ) {}

    /*
     * Dashboard
     */

    @Get('dashboard')
    @ApiOperation({
        summary:
            'Get admin dashboard statistics',
    })
    @ApiResponse({
        status: 200,
        description:
            'Dashboard statistics',
    })
    async getDashboard() {
        return this.adminService.getDashboard();
    }

    /*
     * Users
     */

    @Get('users')
    @ApiOperation({
        summary:
            'Get users for admin panel',
    })
    async getUsers(
        @Query()
        query: AdminQueryDto,
    ) {
        return this.adminService.getUsers(
            query.page ?? 1,
            query.limit ?? 20,
        );
    }

    /*
     * Subscriptions
     */

    @Get('subscriptions')
    @ApiOperation({
        summary:
            'Get subscriptions for admin panel',
    })
    async getSubscriptions(
        @Query()
        query: AdminQueryDto,
    ) {
        return this.adminService.getSubscriptions(
            query.page ?? 1,
            query.limit ?? 20,
        );
    }

    @Get('subscriptions/stats')
    @ApiOperation({
        summary:
            'Get subscription statistics',
    })
    async getSubscriptionStats() {
        return this.adminService.getSubscriptionStats();
    }

    /*
     * AI Providers
     */

    @Get('providers')
    @ApiOperation({
        summary:
            'Get AI provider overview',
    })
    async getProviders() {
        return this.adminService.getProviders();
    }

    /*
     * API Usage Analytics
     */

    @Get('usage')
    @ApiOperation({
        summary:
            'Get API usage analytics',
    })
    async getUsageAnalytics() {
        return this.adminService.getUsageAnalytics();
    }

    @Get('usage/providers')
    @ApiOperation({
        summary:
            'Get usage grouped by AI provider model',
    })
    async getProviderUsage() {
        return this.adminService.getProviderUsage();
    }

    /*
     * Request Logs
     */

    @Get('logs')
    @ApiOperation({
        summary:
            'Get API request logs',
    })
    async getRequestLogs(
        @Query()
        query: AdminQueryDto,
    ) {
        return this.adminService.getRequestLogs(
            query.page ?? 1,
            query.limit ?? 50,
        );
    }

    /*
     * System Health
     */

    @Get('health')
    @ApiOperation({
        summary:
            'Get system health information',
    })
    async getSystemHealth() {
        return this.adminService.getSystemHealth();
    }
}