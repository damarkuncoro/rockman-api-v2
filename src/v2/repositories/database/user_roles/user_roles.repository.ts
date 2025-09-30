import { Repository } from "../../../../core/core.repository";
import { userRoles } from "../../../../db/schema/user_roles/table";

export class UserRolesRepository extends Repository<typeof userRoles> {
  constructor() {
    super(userRoles);
  }
}
