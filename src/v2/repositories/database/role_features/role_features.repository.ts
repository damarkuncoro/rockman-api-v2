import { Repository } from "../../../../core/core.repository";
import { roleFeatures } from "../../../../db/schema/role_features/table";

export class RoleFeaturesRepository extends Repository<typeof roleFeatures> {
  constructor() {
    super(roleFeatures);
  }
}
