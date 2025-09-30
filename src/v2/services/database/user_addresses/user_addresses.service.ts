import { Service } from '@/core/core.service';
import { UserAddressesRepository } from '@/v2/repositories/database/user_addresses';
import { userAddresses } from '@/db/schema';

export const userAddressesService = new Service(UserAddressesRepository, userAddresses, { enableLogging: true })