import SERVICE from "../../../../core/core.service.registry";
import { roleFeaturesService } from "../../database/role_features/role_features.service";

SERVICE.register("roleFeatures", roleFeaturesService);