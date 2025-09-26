import { Service } from "../../../../core/core.service";
import { features } from "../../../../db/schema/features/table";
import { featuresRepository } from "../../../repositories/database/features/features.repository";

class FeaturesService extends Service<typeof features> {
  constructor() {
    super(featuresRepository);
  }
}

export const featuresService = new FeaturesService();