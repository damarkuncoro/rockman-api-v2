import { SERVICE } from "@/core/core.service.registry";
import { discountService } from "@/v2/services/database/discounts";

SERVICE.register("discounts", discountService);