import SERVICE from "@/core/core.service.registry";
import { userDevicesService } from "@/v2/services/database/user_devices/user_devices.service";

SERVICE.register("userDevices", userDevicesService);