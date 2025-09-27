import { IService } from "@/core/core.interface";
import { Service } from "@/core/core.service";
import { roleFeatures } from "@/db/schema/role_features/table";
import { roleFeaturesRepository } from "@/v2/repositories/database/role_features";

class RoleFeaturesService extends Service<typeof roleFeatures> {
  constructor() {
    super(roleFeaturesRepository);
  }
}

export const roleFeaturesService: IService<typeof roleFeatures> = new RoleFeaturesService();