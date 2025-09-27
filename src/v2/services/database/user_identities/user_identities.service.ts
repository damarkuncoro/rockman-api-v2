import { IService } from "@/core/core.interface";
import { Service } from "@/core/core.service";
import { userIdentities } from "@/db/schema/user_identities/table";
import { userIdentitiesRepository } from "@/v2/repositories/database/user_identities";

class UserIdentitiesService extends Service<typeof userIdentities> {
  constructor() {
    super(userIdentitiesRepository);
  }
}

export const userIdentitiesService: IService<typeof userIdentities> = new UserIdentitiesService();