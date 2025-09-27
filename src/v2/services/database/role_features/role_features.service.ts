import { IService } from "@/core/core.interface";
import { Service } from "../../../../core/core.service";
import { roleFeatures } from "../../../../db/schema/role_features/table";
import { roleFeaturesRepository } from "../../../repositories/database/role_features/role_features.repository";

class RoleFeaturesService extends Service<typeof roleFeatures> {
  constructor() {
    super(roleFeaturesRepository);
  }
}

export const roleFeaturesService: IService<typeof roleFeatures> = new RoleFeaturesService();