import { Repository } from "../../../../core/core.repository";
import { roleFeatures } from "../../../../db/schema/role_features/table";

class RoleFeaturesRepository extends Repository<typeof roleFeatures> {
  constructor() {
    super(roleFeatures);
  }
}

export const roleFeaturesRepository = new RoleFeaturesRepository();