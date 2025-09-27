import SERVICE from "@/core/core.service.registry";
import { featureCategoriesService } from "@/v2/services/database/feature_categories";

SERVICE.register("featureCategories", featureCategoriesService);