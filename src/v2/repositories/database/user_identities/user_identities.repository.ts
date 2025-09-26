import { Repository } from "../../../../core/core.repository";
import { userIdentities } from "../../../../db/schema/user_identities/table";

class UserIdentitiesRepository extends Repository<typeof userIdentities> {
  constructor() {
    super(userIdentities);
  }
}

export const userIdentitiesRepository = new UserIdentitiesRepository();