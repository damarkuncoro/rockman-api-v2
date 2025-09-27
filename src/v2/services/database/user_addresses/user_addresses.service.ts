import { IService } from "@/core/core.interface";
import { Service } from "@/core/core.service";
import { userAddresses } from "@/db/schema/user_addresses/table";
import { userAddressesRepository } from "@/v2/repositories/database/user_addresses";

class UserAddressesService extends Service<typeof userAddresses> {
  constructor() {
    super(userAddressesRepository);
  }
}

export const userAddressesService: IService<typeof userAddresses> = new UserAddressesService();