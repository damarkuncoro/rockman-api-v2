import { Repository } from "../../../../core/core.repository";
import { roles } from "../../../../db/schema/roles/table";

class RolesRepository extends Repository<typeof roles> {
  constructor() {
    super(roles);
  }
}

export const rolesRepository = new RolesRepository();