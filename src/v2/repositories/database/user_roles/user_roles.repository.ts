import { Repository } from "../../../../core/core.repository";
import { userRoles } from "../../../../db/schema/user_roles/table";

class UserRolesRepository extends Repository<typeof userRoles> {
  constructor() {
    super(userRoles);
  }
}

export const userRolesRepository = new UserRolesRepository();