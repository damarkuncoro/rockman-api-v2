import { IService } from "@/core/core.interface";
import { Service } from "../../../../core/core.service";
import { userMemberships } from "../../../../db/schema/user_memberships/table";
import { userMembershipsRepository } from "../../../repositories/database/user_memberships/user_memberships.repository";

class UserMembershipsService extends Service<typeof userMemberships> {
  constructor() {
    super(userMembershipsRepository);
  }
}

export const userMembershipsService: IService<typeof userMemberships> =
  new UserMembershipsService();