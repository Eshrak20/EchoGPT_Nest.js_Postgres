import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    ParseUUIDPipe,
    Patch,
    Query,
    Req,
    UseGuards,
} from '@nestjs/common';

import {
    ApiBearerAuth,
    ApiOperation,
    ApiQuery,
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

import { UpdateRoleDto } from '../users/dto/update-role.dto.js';
import { UpdateUserStatusDto } from '../users/dto/update-user-status.dto.js';
import type { AuthenticatedRequest } from '../users/users.controller.js';
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
    ) { }


    // GET /api/users?page=1&limit=10
    @Get('users')
    @ApiOperation({ summary: 'Admin: list all users' })
    @ApiQuery({ name: 'page', required: false, example: 1 })
    @ApiQuery({ name: 'limit', required: false, example: 20 })
    getAllUsers(
        @Query('page', new ParseIntPipe({ optional: true }))
        page = 1,
        @Query('limit', new ParseIntPipe({ optional: true }))
        limit = 20,
    ) {
        const safePage = Math.max(1, page);
        const safeLimit = Math.min(100, Math.max(1, limit));

        return this.adminService.getAllUsers(
            safePage,
            safeLimit,
        );
    }

    // GET /api/users/:id
    @Get('users/:id')
    @ApiOperation({ summary: 'Admin: get user by ID' })
    getUserById(
        @Param('id', ParseUUIDPipe) id: string,
    ) {
        return this.adminService.getUserById(id);
    }

    // PATCH /api/users/:id/role
    @Patch('users/:id/role')
    @ApiOperation({ summary: 'Admin: update user role' })
    updateUserRole(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() dto: UpdateRoleDto,
        @Req() req: AuthenticatedRequest,
    ) {
        return this.adminService.updateUserRole(
            id,
            dto.role,
            req.user.id,
        );
    }

    // PATCH /api/users/:id/status
    @Patch('users/:id/status')
    @ApiOperation({ summary: 'Admin: activate or deactivate user' })
    updateUserStatus(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() dto: UpdateUserStatusDto,
        @Req() req: AuthenticatedRequest,
    ) {
        return this.adminService.updateUserStatus(
            id,
            dto.isActive,
            req.user.id,
        );
    }

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