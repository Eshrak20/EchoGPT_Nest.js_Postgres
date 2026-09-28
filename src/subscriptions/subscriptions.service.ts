import {
    BadRequestException,
    ConflictException,
    Injectable
} from '@nestjs/common';

import {
    SubscriptionPlan,
    SubscriptionStatus,
} from '../generated/prisma/client.js';

import { PrismaService } from '../prisma/prisma.service.js';
import { SUBSCRIPTION_PLANS } from './constants/subscription-plans.js';

@Injectable()
export class SubscriptionsService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  // --------------------------------------------------
  // Available plans
  // --------------------------------------------------

  getPlans() {
    return Object.entries(SUBSCRIPTION_PLANS).map(
      ([plan, config]) => ({
        plan,
        ...config,
      }),
    );
  }

  // --------------------------------------------------
  // Get current subscription
  // --------------------------------------------------

  async getCurrentSubscription(userId: string) {
    let subscription =
      await this.prisma.subscription.findFirst({
        where: {
          userId,
          status: SubscriptionStatus.ACTIVE,
        },
        orderBy: {
          createdAt: 'desc',
        },
      });

    if (!subscription) {
      subscription =
        await this.createFreeSubscription(userId);
    }

    return this.buildSubscriptionResponse(subscription);
  }

  // --------------------------------------------------
  // Create FREE subscription
  // --------------------------------------------------

  private async createFreeSubscription(userId: string) {
    const subscription =
      await this.prisma.subscription.create({
        data: {
          userId,
          plan: SubscriptionPlan.FREE,
          status: SubscriptionStatus.ACTIVE,
        },
      });

    return subscription;
  }

  // --------------------------------------------------
  // Upgrade subscription
  // --------------------------------------------------

  async upgrade(
    userId: string,
    requestedPlan: SubscriptionPlan,
  ) {
    if (requestedPlan !== SubscriptionPlan.PREMIUM) {
      throw new BadRequestException(
        'Only PREMIUM upgrade is currently available',
      );
    }

    const current =
      await this.getActiveSubscription(userId);

    if (current.plan === SubscriptionPlan.PREMIUM) {
      throw new ConflictException(
        'You are already subscribed to the PREMIUM plan',
      );
    }

    const updated =
      await this.prisma.subscription.update({
        where: {
          id: current.id,
        },
        data: {
          plan: SubscriptionPlan.PREMIUM,
          status: SubscriptionStatus.ACTIVE,
          startedAt: new Date(),
          expiresAt: this.getNextMonthDate(),
        },
      });

    return {
      message: 'Subscription upgraded successfully',
      subscription:
        this.buildSubscriptionResponse(updated),
    };
  }

  // --------------------------------------------------
  // Downgrade subscription
  // --------------------------------------------------

  async downgrade(
    userId: string,
    requestedPlan: SubscriptionPlan,
  ) {
    if (requestedPlan !== SubscriptionPlan.FREE) {
      throw new BadRequestException(
        'Only FREE downgrade is currently available',
      );
    }

    const current =
      await this.getActiveSubscription(userId);

    if (current.plan === SubscriptionPlan.FREE) {
      throw new ConflictException(
        'You are already on the FREE plan',
      );
    }

    const updated =
      await this.prisma.subscription.update({
        where: {
          id: current.id,
        },
        data: {
          plan: SubscriptionPlan.FREE,
          status: SubscriptionStatus.ACTIVE,
          startedAt: new Date(),
          expiresAt: null,
        },
      });

    return {
      message: 'Subscription downgraded successfully',
      subscription:
        this.buildSubscriptionResponse(updated),
    };
  }

  // --------------------------------------------------
  // Subscription status
  // --------------------------------------------------

  async getStatus(userId: string) {
    const subscription =
      await this.getActiveSubscription(userId);

    const usage =
      await this.getCurrentUsage(subscription);

    const plan =
      SUBSCRIPTION_PLANS[subscription.plan];

    const remainingRequests =
      Math.max(
        plan.monthlyRequests - usage.requestCount,
        0,
      );

    return {
      subscription: {
        id: subscription.id,
        plan: subscription.plan,
        status: subscription.status,
        startedAt: subscription.startedAt,
        expiresAt: subscription.expiresAt,
      },

      usage: {
        limit: plan.monthlyRequests,
        used: usage.requestCount,
        remaining: remainingRequests,
        periodStart: usage.periodStart,
        periodEnd: usage.periodEnd,
      },
    };
  }

  // --------------------------------------------------
  // Remaining requests
  // --------------------------------------------------

  async getRemainingRequests(userId: string) {
    const subscription =
      await this.getActiveSubscription(userId);

    const usage =
      await this.getCurrentUsage(subscription);

    const plan =
      SUBSCRIPTION_PLANS[subscription.plan];

    const remaining =
      Math.max(
        plan.monthlyRequests - usage.requestCount,
        0,
      );

    return {
      plan: subscription.plan,
      limit: plan.monthlyRequests,
      used: usage.requestCount,
      remaining,
      periodStart: usage.periodStart,
      periodEnd: usage.periodEnd,
    };
  }

  // --------------------------------------------------
  // Consume one AI request
  // --------------------------------------------------

  async consumeRequest(userId: string) {
    const subscription =
      await this.getActiveSubscription(userId);

    const plan =
      SUBSCRIPTION_PLANS[subscription.plan];

    const usage =
      await this.getCurrentUsage(subscription);

    if (usage.requestCount >= plan.monthlyRequests) {
      throw new BadRequestException(
        'Monthly request limit reached. Please upgrade your plan.',
      );
    }

    const updated =
      await this.prisma.subscriptionUsage.update({
        where: {
          id: usage.id,
        },
        data: {
          requestCount: {
            increment: 1,
          },
        },
      });

    return {
      allowed: true,
      used: updated.requestCount,
      limit: plan.monthlyRequests,
      remaining:
        plan.monthlyRequests -
        updated.requestCount,
    };
  }

  // --------------------------------------------------
  // Find active subscription
  // --------------------------------------------------

  private async getActiveSubscription(
    userId: string,
  ) {
    let subscription =
      await this.prisma.subscription.findFirst({
        where: {
          userId,
          status: SubscriptionStatus.ACTIVE,
        },
        orderBy: {
          createdAt: 'desc',
        },
      });

    if (!subscription) {
      subscription =
        await this.createFreeSubscription(userId);
    }

    return subscription;
  }

  // --------------------------------------------------
  // Get current usage period
  // --------------------------------------------------

  private async getCurrentUsage(
    subscription: {
      id: string;
    },
  ) {
    const now = new Date();

    let usage =
      await this.prisma.subscriptionUsage.findFirst({
        where: {
          subscriptionId: subscription.id,
          periodStart: {
            lte: now,
          },
          periodEnd: {
            gt: now,
          },
        },
      });

    if (!usage) {
      const periodStart = new Date(
        now.getFullYear(),
        now.getMonth(),
        1,
      );

      const periodEnd = new Date(
        now.getFullYear(),
        now.getMonth() + 1,
        1,
      );

      usage =
        await this.prisma.subscriptionUsage.create({
          data: {
            subscriptionId: subscription.id,
            periodStart,
            periodEnd,
          },
        });
    }

    return usage;
  }

  // --------------------------------------------------
  // Build subscription response
  // --------------------------------------------------

  private buildSubscriptionResponse(
    subscription: {
      id: string;
      plan: SubscriptionPlan;
      status: SubscriptionStatus;
      startedAt: Date;
      expiresAt: Date | null;
    },
  ) {
    const plan =
      SUBSCRIPTION_PLANS[subscription.plan];

    return {
      id: subscription.id,
      plan: subscription.plan,
      status: subscription.status,
      price: plan.price,
      monthlyRequests: plan.monthlyRequests,
      startedAt: subscription.startedAt,
      expiresAt: subscription.expiresAt,
    };
  }

  // --------------------------------------------------
  // Next month
  // --------------------------------------------------

  private getNextMonthDate() {
    const date = new Date();

    date.setMonth(date.getMonth() + 1);

    return date;
  }
}