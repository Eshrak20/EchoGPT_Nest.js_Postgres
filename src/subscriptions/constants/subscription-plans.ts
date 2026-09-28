import { SubscriptionPlan } from '../../generated/prisma/index.js';

export const SUBSCRIPTION_PLANS: Record<
  SubscriptionPlan,
  {
    name: string;
    price: number;
    monthlyRequests: number;
  }
> = {
  [SubscriptionPlan.FREE]: {
    name: 'Free',
    price: 0,
    monthlyRequests: 50,
  },

  [SubscriptionPlan.PREMIUM]: {
    name: 'Premium',
    price: 19.99,
    monthlyRequests: 1000,
  },

  [SubscriptionPlan.PRO]: {
    name: 'Pro',
    price: 49.99,
    monthlyRequests: 5000,
  },
};