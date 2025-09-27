import { SERVICE } from "@/core/core.service.registry";
import { SubscriptionDiscountService } from "@/v2/services/database/subscription_discounts";

SERVICE.register("subscriptionDiscounts", new SubscriptionDiscountService());