import { Service } from "@/core/core.service";
import { IService } from "@/core/core.interface";
import { subscriptionDiscounts } from "@/db/schema/billing/subscription_discounts";
import { SubscriptionDiscountRepository } from "@/v2/repositories/database/subscription_discounts";

class SubscriptionDiscountService extends Service<typeof subscriptionDiscounts> {
  constructor() {
    super(new SubscriptionDiscountRepository());
  }
}

export const subscriptionDiscountService: IService<
  typeof subscriptionDiscounts
> = new SubscriptionDiscountService();