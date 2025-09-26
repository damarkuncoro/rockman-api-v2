import SERVICE from "../../../../core/core.service.registry";
import { featureCategoriesService } from "../../database/feature_categories/feature_categories.service";

SERVICE.register("featureCategories", featureCategoriesService);