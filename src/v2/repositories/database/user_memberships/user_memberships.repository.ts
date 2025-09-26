import { Repository } from "../../../../core/core.repository";
import { userMemberships } from "../../../../db/schema/user_memberships/table";

class UserMembershipsRepository extends Repository<typeof userMemberships> {
  constructor() {
    super(userMemberships);
  }
}

export const userMembershipsRepository = new UserMembershipsRepository();