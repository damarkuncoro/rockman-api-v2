import { Service } from "../../../../core/core.service";
import { userIdentities } from "../../../../db/schema/user_identities/table";
import { userIdentitiesRepository } from "../../../repositories/database/user_identities/user_identities.repository";

class UserIdentitiesService extends Service<typeof userIdentities> {
  constructor() {
    super(userIdentitiesRepository);
  }
}

export const userIdentitiesService = new UserIdentitiesService();