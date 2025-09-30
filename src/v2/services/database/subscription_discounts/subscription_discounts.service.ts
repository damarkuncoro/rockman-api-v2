import { Service } from '@/core/core.service';
import { SubscriptionDiscountRepository } from '@/v2/repositories/database/subscription_discounts';
import { subscriptionDiscounts } from '@/db/schema';

export const subscriptionDiscountsService = new Service(SubscriptionDiscountRepository, subscriptionDiscounts, { enableLogging: true })