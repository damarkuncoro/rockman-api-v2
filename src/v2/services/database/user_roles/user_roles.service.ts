import { IService } from "@/core/core.interface";
import { Service } from "../../../../core/core.service";
import { userRoles } from "../../../../db/schema/user_roles/table";
import { userRolesRepository } from "../../../repositories/database/user_roles/user_roles.repository";

class UserRolesService extends Service<typeof userRoles> {
  constructor() {
    super(userRolesRepository);
  }
}

export const userRolesService: IService<typeof userRoles> = new UserRolesService();