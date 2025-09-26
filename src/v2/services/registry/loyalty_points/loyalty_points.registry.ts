import SERVICE from "../../../../core/core.service.registry";
import { loyaltyPointsService } from "../../database/loyalty_points/loyalty_points.service";

SERVICE.register("loyaltyPoints", loyaltyPointsService);