import { Service } from '@/core/core.service';
import { UserPhonesRepository } from '@/v2/repositories/database/user_phones';
import { userPhones } from '@/db/schema';

export const userPhonesService = new Service(UserPhonesRepository, userPhones, { enableLogging: true })