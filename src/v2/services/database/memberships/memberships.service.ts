import { IService } from "@/core/core.interface";
import { Service } from "@/core/core.service";
import { memberships } from "@/db/schema/memberships/table";
import { membershipsRepository } from "@/v2/repositories/database/memberships";

class MembershipsService extends Service<typeof memberships> {
  constructor() {
    super(membershipsRepository);
  }
}

export const membershipsService: IService<typeof memberships> = new MembershipsService();