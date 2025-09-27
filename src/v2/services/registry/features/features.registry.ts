import SERVICE from "@/core/core.service.registry";
import { featuresService } from "@/v2/services/database/features";

SERVICE.register("features", featuresService);