import { Service } from '@/core/core.service';
import { SubscriptionRepository } from '@/v2/repositories/database/subscriptions';
import { subscriptions } from '@/db/schema';

export const subscriptionsService = new Service(SubscriptionRepository, subscriptions, { enableLogging: true })