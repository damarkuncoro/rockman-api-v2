import { Repository } from "../../../../core/core.repository";
import { userPhones } from "../../../../db/schema/user_phones/table";

class UserPhonesRepository extends Repository<typeof userPhones> {
  constructor() {
    super(userPhones);
  }
}

export const userPhonesRepository = new UserPhonesRepository();