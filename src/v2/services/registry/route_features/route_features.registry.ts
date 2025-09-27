import SERVICE from "@/core/core.service.registry";
import { routeFeaturesService } from "@/v2/services/database/route_features";

SERVICE.register("routeFeatures", routeFeaturesService);