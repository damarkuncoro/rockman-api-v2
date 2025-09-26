import { Service } from "../../../../core/core.service";
import { userDevices } from "../../../../db/schema/user_devices/table";
import { userDevicesRepository } from "../../../repositories/database/user_devices/user_devices.repository";

class UserDevicesService extends Service<typeof userDevices> {
  constructor() {
    super(userDevicesRepository);
  }
}

export const userDevicesService = new UserDevicesService();