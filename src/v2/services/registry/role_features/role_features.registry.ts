import SERVICE from "@/core/core.service.registry";
import { roleFeaturesService } from "@/v2/services/database/role_features";

SERVICE.register("roleFeatures", roleFeaturesService);