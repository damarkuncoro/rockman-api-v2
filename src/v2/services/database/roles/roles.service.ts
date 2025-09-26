import { Service } from "../../../../core/core.service";
import { roles } from "../../../../db/schema/roles/table";
import { rolesRepository } from "../../../repositories/database/roles/roles.repository";

class RolesService extends Service<typeof roles> {
  constructor() {
    super(rolesRepository);
  }
}

export const rolesService = new RolesService();