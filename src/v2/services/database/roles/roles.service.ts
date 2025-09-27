import { IService } from "@/core/core.interface";
import { Service } from "@/core/core.service";
import { roles } from "@/db/schema/roles/table";
import { rolesRepository } from "@/v2/repositories/database/roles";

class RolesService extends Service<typeof roles> {
  constructor() {
    super(rolesRepository);
  }
}

export const rolesService: IService<typeof roles> = new RolesService();