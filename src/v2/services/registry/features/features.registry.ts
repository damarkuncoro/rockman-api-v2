import SERVICE from "../../../../core/core.service.registry";
import { featuresService } from "../../database/features/features.service";

SERVICE.register("features", featuresService);