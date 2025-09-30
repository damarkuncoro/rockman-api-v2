import { Repository } from "../../../../core/core.repository";
import { featureCategories } from "../../../../db/schema/feature_categories/table";

export class FeatureCategoriesRepository extends Repository<typeof featureCategories> {
  constructor() {
    super(featureCategories);
  }
}
