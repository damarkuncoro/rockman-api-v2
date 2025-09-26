import SERVICE from "../../../../core/core.service.registry";
import { routeFeaturesService } from "../../database/route_features/route_features.service";

SERVICE.register("routeFeatures", routeFeaturesService);