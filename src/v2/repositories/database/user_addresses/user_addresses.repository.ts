import { Repository } from "../../../../core/core.repository";
import { userAddresses } from "../../../../db/schema/user_addresses/table";

class UserAddressesRepository extends Repository<typeof userAddresses> {
  constructor() {
    super(userAddresses);
  }
}

export const userAddressesRepository = new UserAddressesRepository();