import { Repository } from "../../../../core/core.repository";
import { features } from "../../../../db/schema/features/table";

class FeaturesRepository extends Repository<typeof features> {
  constructor() {
    super(features);
  }
}

export const featuresRepository = new FeaturesRepository();