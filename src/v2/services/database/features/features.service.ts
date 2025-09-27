import { IService } from "@/core/core.interface";
import { Service } from "@/core/core.service";
import { features } from "@/db/schema/features/table";
import { featuresRepository } from "@/v2/repositories/database/features";

class FeaturesService extends Service<typeof features> {
  constructor() {
    super(featuresRepository);
  }
}

export const featuresService: IService<typeof features> = new FeaturesService();