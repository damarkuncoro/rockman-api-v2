import { Service } from "@/core/core.service";
import { IService } from "@/core/core.interface";
import { subscriptions } from "@/db/schema/billing/subscriptions";
import { SubscriptionRepository } from "@/v2/repositories/database/subscriptions";

class SubscriptionService extends Service<typeof subscriptions> {
  constructor() {
    super(new SubscriptionRepository());
  }
}

export const subscriptionService: IService<typeof subscriptions> =
  new SubscriptionService();