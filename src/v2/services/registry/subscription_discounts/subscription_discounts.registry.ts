import { SERVICE } from "@/core/core.service.registry";
import { subscriptionDiscountService } from "@/v2/services/database/subscription_discounts";

SERVICE.register("subscriptionDiscounts", subscriptionDiscountService);