import { IService } from "@/core/core.interface";
import { Service } from "@/core/core.service";
import { userMemberships } from "@/db/schema/user_memberships/table";
import { userMembershipsRepository } from "@/v2/repositories/database/user_memberships";

class UserMembershipsService extends Service<typeof userMemberships> {
  constructor() {
    super(userMembershipsRepository);
  }
}

export const userMembershipsService: IService<typeof userMemberships> =
  new UserMembershipsService();