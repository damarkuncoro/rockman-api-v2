import { Repository } from "@/core/core.repository";
import { subscriptionDiscounts } from "@/db/schema/billing/subscription_discounts";

export class SubscriptionDiscountRepository extends Repository<typeof subscriptionDiscounts> {
  constructor() {
    super(subscriptionDiscounts);
  }
}