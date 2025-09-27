import { IService } from "@/core/core.interface";
import { Service } from "@/core/core.service";
import { featureCategories } from "@/db/schema/feature_categories/table";
import { featureCategoriesRepository } from "@/v2/repositories/database/feature_categories";

class FeatureCategoriesService extends Service<typeof featureCategories> {
  constructor() {
    super(featureCategoriesRepository);
  }
}

export const featureCategoriesService: IService<typeof featureCategories> = new FeatureCategoriesService();