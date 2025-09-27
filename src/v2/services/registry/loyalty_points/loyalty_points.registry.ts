import SERVICE from "@/core/core.service.registry";
import { loyaltyPointsService } from "@/v2/services/database/loyalty_points";

SERVICE.register("loyaltyPoints", loyaltyPointsService);