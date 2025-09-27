import { Repository } from "@/core/core.repository";
import { subscriptions } from "@/db/schema/billing/subscriptions";

export class SubscriptionRepository extends Repository<typeof subscriptions> {
  constructor() {
    super(subscriptions);
  }
}