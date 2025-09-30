import { Repository } from "../../../../core/core.repository";
import { userMemberships } from "../../../../db/schema/user_memberships/table";

export class UserMembershipsRepository extends Repository<typeof userMemberships> {
  constructor() {
    super(userMemberships);
  }
}
