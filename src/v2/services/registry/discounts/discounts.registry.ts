import { SERVICE } from "@/core/core.service.registry";
import { DiscountService } from "@/v2/services/database/discounts";

SERVICE.register("discounts", new DiscountService());