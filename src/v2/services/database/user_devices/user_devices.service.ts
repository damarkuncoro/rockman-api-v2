import { Service } from '@/core/core.service';
import { UserDevicesRepository } from '@/v2/repositories/database/user_devices';
import { userDevices } from '@/db/schema';

export const userDevicesService = new Service(UserDevicesRepository, userDevices, { enableLogging: true })