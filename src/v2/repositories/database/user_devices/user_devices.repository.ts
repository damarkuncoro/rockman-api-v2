import { Repository } from "../../../../core/core.repository";
import { userDevices } from "../../../../db/schema/user_devices/table";

export class UserDevicesRepository extends Repository<typeof userDevices> {
  constructor() {
    super(userDevices);
  }
}
