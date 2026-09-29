import {
    ForbiddenException,
    Injectable,
    NotFoundException
} from '@nestjs/common';

import { UserRole } from '../generated/prisma/index.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class AdminService {
    constructor(
        private readonly prisma: PrismaService,
    ) { }
    // Admin: list users with pagination
    async getAllUsers(page = 1, limit = 10) {
        const skip = (page - 1) * limit;

        const [users, total] = await this.prisma.$transaction([
            this.prisma.user.findMany({
                skip,
                take: limit,
                orderBy: { createdAt: 'desc' },
                include: { role: true },
            }),
            this.prisma.user.count(),
        ]);

        return {
            data: users.map((user) => this.sanitizeUser(user)),
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };
    }

    // Admin: get a user by ID
    async getUserById(id: string) {
        const user = await this.getUserOrThrow(id);

        return {
            user: this.sanitizeUser(user),
        };
    }

    // Admin: update a user's role
    async updateUserRole(
        targetUserId: string,
        roleName: UserRole,
        adminId: string,
    ) {
        if (targetUserId === adminId) {
            throw new ForbiddenException(
                'You cannot change your own role',
            );
        }

        const targetUser = await this.getUserOrThrow(targetUserId);

        const role = await this.prisma.role.upsert({
            where: { name: roleName },
            update: {},
            create: { name: roleName },
        });

        const updatedUser = await this.prisma.user.update({
            where: { id: targetUser.id },
            data: { roleId: role.id },
            include: { role: true },
        });

        return {
            message: 'User role updated successfully',
            user: this.sanitizeUser(updatedUser),
        };
    }

    // Admin: activate or deactivate a user
    async updateUserStatus(
        targetUserId: string,
        isActive: boolean,
        adminId: string,
    ) {
        if (targetUserId === adminId && !isActive) {
            throw new ForbiddenException(
                'You cannot deactivate your own account',
            );
        }

        await this.getUserOrThrow(targetUserId);

        const updatedUser = await this.prisma.user.update({
            where: { id: targetUserId },
            data: { isActive },
            include: { role: true },
        });

        // Revoke sessions when account is deactivated
        if (!isActive) {
            await this.prisma.session.updateMany({
                where: {
                    userId: targetUserId,
                    revokedAt: null,
                },
                data: { revokedAt: new Date() },
            });
        }

        return {
            message: isActive
                ? 'User account activated successfully'
                : 'User account deactivated successfully',
            user: this.sanitizeUser(updatedUser),
        };
    }
    // Find a user by ID
    async findById(id: string) {
        return this.prisma.user.findUnique({
            where: { id },
            include: { role: true },
        });
    }
    async getUserOrThrow(id: string) {
        const user = await this.findById(id);

        if (!user) {
            throw new NotFoundException('User not found');
        }

        return user;
    }

    /*
     * ========================================
     * DASHBOARD STATISTICS
     * ========================================
     */

    async getDashboard() {
        const [
            totalUsers,
            activeUsers,
            verifiedUsers,
            totalConversations,
            totalMessages,
            totalProviders,
            activeProviders,
            activeSubscriptions,
        ] = await Promise.all([
            this.prisma.user.count(),

            this.prisma.user.count({
                where: {
                    isActive: true,
                },
            }),

            this.prisma.user.count({
                where: {
                    emailVerified: true,
                },
            }),

            this.prisma.conversation.count(),

            this.prisma.message.count(),

            this.prisma.provider.count(),

            this.prisma.provider.count({
                where: {
                    isActive: true,
                },
            }),

            this.prisma.subscription.count({
                where: {
                    status: 'ACTIVE',
                },
            }),
        ]);

        return {
            users: {
                total: totalUsers,
                active: activeUsers,
                verified: verifiedUsers,
            },

            conversations: {
                total: totalConversations,
            },

            messages: {
                total: totalMessages,
            },

            providers: {
                total: totalProviders,
                active: activeProviders,
            },

            subscriptions: {
                active: activeSubscriptions,
            },
        };
    }

    /*
     * ========================================
     * USERS
     * ========================================
     */

    async getUsers(
        page = 1,
        limit = 20,
    ) {
        const skip =
            (page - 1) * limit;

        const [
            users,
            total,
        ] = await Promise.all([
            this.prisma.user.findMany({
                skip,
                take: limit,

                orderBy: {
                    createdAt: 'desc',
                },

                select: {
                    id: true,
                    name: true,
                    email: true,
                    emailVerified: true,
                    isActive: true,
                    role: {
                        select: {
                            name: true,
                        },
                    },
                    createdAt: true,
                    updatedAt: true,
                },
            }),

            this.prisma.user.count(),
        ]);

        return {
            data: users,

            meta: {
                page,
                limit,
                total,
                totalPages:
                    Math.ceil(
                        total / limit,
                    ),
            },
        };
    }

    /*
     * ========================================
     * SUBSCRIPTIONS
     * ========================================
     */

    async getSubscriptionStats() {
        const [
            total,
            active,
            canceled,
            expired,
            free,
            pro,
            premium,
        ] = await Promise.all([
            this.prisma.subscription.count(),

            this.prisma.subscription.count({
                where: {
                    status: 'ACTIVE',
                },
            }),

            this.prisma.subscription.count({
                where: {
                    status: 'CANCELED',
                },
            }),

            this.prisma.subscription.count({
                where: {
                    status: 'EXPIRED',
                },
            }),

            this.prisma.subscription.count({
                where: {
                    plan: 'FREE',
                },
            }),

            this.prisma.subscription.count({
                where: {
                    plan: 'PRO',
                },
            }),

            this.prisma.subscription.count({
                where: {
                    plan: 'PREMIUM',
                },
            }),
        ]);

        return {
            total,
            status: {
                active,
                canceled,
                expired,
            },
            plans: {
                free,
                pro,
                premium,
            },
        };
    }

    async getSubscriptions(
        page = 1,
        limit = 20,
    ) {
        const skip =
            (page - 1) * limit;

        const [
            subscriptions,
            total,
        ] = await Promise.all([
            this.prisma.subscription.findMany({
                skip,
                take: limit,

                orderBy: {
                    createdAt: 'desc',
                },

                include: {
                    user: {
                        select: {
                            id: true,
                            name: true,
                            email: true,
                        },
                    },
                },
            }),

            this.prisma.subscription.count(),
        ]);

        return {
            data: subscriptions,

            meta: {
                page,
                limit,
                total,
                totalPages:
                    Math.ceil(
                        total / limit,
                    ),
            },
        };
    }

    /*
     * ========================================
     * AI PROVIDERS
     * ========================================
     */

    async getProviders() {
        return this.prisma.provider.findMany({
            orderBy: {
                createdAt: 'desc',
            },

            select: {
                id: true,
                name: true,
                type: true,
                isActive: true,
                isDefault: true,
                apiBaseUrl: true,
                createdAt: true,
                updatedAt: true,

                models: {
                    select: {
                        id: true,
                        name: true,
                        modelId: true,
                        isActive: true,
                    },
                },
            },
        });
    }

    /*
     * ========================================
     * API USAGE ANALYTICS
     * ========================================
     */

    async getUsageAnalytics() {
        const [
            totalRequests,
            totalMessages,
            totalSearches,
        ] = await Promise.all([
            this.prisma.subscriptionUsage.aggregate({
                _sum: {
                    requestCount: true,
                },
            }),

            this.prisma.message.count(),

            this.prisma.searchHistory.count(),
        ]);

        return {
            apiRequests:
                totalRequests._sum.requestCount ??
                0,

            chatMessages:
                totalMessages,

            webSearches:
                totalSearches,
        };
    }

    /*
     * ========================================
     * PROVIDER USAGE
     * ========================================
     */

    async getProviderUsage() {
        const usage =
            await this.prisma.message.groupBy({
                by: [
                    'providerModelId',
                ],

                where: {
                    providerModelId: {
                        not: null,
                    },
                },

                _count: {
                    id: true,
                },
            });

        const providerModelIds =
            usage
                .map(
                    (item) =>
                        item.providerModelId,
                )
                .filter(
                    (
                        id,
                    ): id is string =>
                        id !== null,
                );

        const models =
            await this.prisma.providerModel.findMany({
                where: {
                    id: {
                        in: providerModelIds,
                    },
                },

                select: {
                    id: true,
                    name: true,
                    modelId: true,

                    provider: {
                        select: {
                            name: true,
                            type: true,
                        },
                    },
                },
            });

        return usage.map(
            (item) => {
                const model =
                    models.find(
                        (model) =>
                            model.id ===
                            item.providerModelId,
                    );

                return {
                    provider:
                        model?.provider.name ??
                        'Unknown',

                    providerType:
                        model?.provider.type ??
                        null,

                    model:
                        model?.name ??
                        'Unknown',

                    modelId:
                        model?.modelId ??
                        null,

                    requests:
                        item._count.id,
                };
            },
        );
    }

    /*
     * ========================================
     * REQUEST LOGS
     * ========================================
     */

    async getRequestLogs(
        page = 1,
        limit = 50,
    ) {
        const skip =
            (page - 1) * limit;

        const [
            logs,
            total,
        ] = await Promise.all([
            this.prisma.apiRequestLog.findMany({
                skip,
                take: limit,

                orderBy: {
                    createdAt: 'desc',
                },
            }),

            this.prisma.apiRequestLog.count(),
        ]);

        return {
            data: logs,

            meta: {
                page,
                limit,
                total,
                totalPages:
                    Math.ceil(
                        total / limit,
                    ),
            },
        };
    }

    /*
     * ========================================
     * SYSTEM HEALTH
     * ========================================
     */

    async getSystemHealth() {
        const startedAt =
            Date.now();

        let database = 'healthy';
        let databaseResponseTime = 0;

        try {
            const dbStartedAt =
                Date.now();

            await this.prisma.$queryRaw`
                SELECT 1
            `;

            databaseResponseTime =
                Date.now() - dbStartedAt;
        } catch (error) {
            console.error(
                'Database health check failed:',
                error,
            );

            database =
                'unhealthy';
        }

        const providers =
            await this.prisma.provider.count({
                where: {
                    isActive: true,
                },
            });

        return {
            status:
                database === 'healthy'
                    ? 'healthy'
                    : 'unhealthy',

            uptime:
                process.uptime(),

            responseTime:
                Date.now() - startedAt,

            database: {
                status: database,
                responseTime:
                    databaseResponseTime,
            },

            providers: {
                active: providers,
            },

            memory: {
                rss:
                    process.memoryUsage()
                        .rss,

                heapUsed:
                    process.memoryUsage()
                        .heapUsed,

                heapTotal:
                    process.memoryUsage()
                        .heapTotal,
            },

            node: {
                version:
                    process.version,
                environment:
                    process.env.NODE_ENV ??
                    'development',
            },

            timestamp:
                new Date(),
        };
    }

    // Never return the password hash
    private sanitizeUser(user: any) {
        const { passwordHash, ...safeUser } = user;
        return safeUser;
    }
}