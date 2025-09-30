import { Repository } from "../../../../core/core.repository";
import { userAddresses } from "../../../../db/schema/user_addresses/table";

export class UserAddressesRepository extends Repository<typeof userAddresses> {
  constructor() {
    super(userAddresses);
  }
}
