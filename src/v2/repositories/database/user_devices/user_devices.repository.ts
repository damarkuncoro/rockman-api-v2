import { Repository } from "../../../../core/core.repository";
import { userDevices } from "../../../../db/schema/user_devices/table";

class UserDevicesRepository extends Repository<typeof userDevices> {
  constructor() {
    super(userDevices);
  }
}

export const userDevicesRepository = new UserDevicesRepository();