import { Service } from "@/core/core.service";
import { subscriptions } from "@/db/schema/billing/subscriptions";
import { SubscriptionRepository } from "@/v2/repositories/database/subscriptions";

export class SubscriptionService extends Service<typeof subscriptions> {
  constructor() {
    super(new SubscriptionRepository());
  }
}