import { Service } from '@/core/core.service';
import { UserIdentitiesRepository } from '@/v2/repositories/database/user_identities';
import { userIdentities } from '@/db/schema';

export const userIdentitiesService = new Service(UserIdentitiesRepository, userIdentities, { enableLogging: true })