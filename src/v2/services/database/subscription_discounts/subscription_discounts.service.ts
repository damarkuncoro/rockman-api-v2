import { Service } from "@/core/core.service";
import { subscriptionDiscounts } from "@/db/schema/billing/subscription_discounts";
import { SubscriptionDiscountRepository } from "@/v2/repositories/database/subscription_discounts";

export class SubscriptionDiscountService extends Service<typeof subscriptionDiscounts> {
  constructor() {
    super(new SubscriptionDiscountRepository());
  }
}