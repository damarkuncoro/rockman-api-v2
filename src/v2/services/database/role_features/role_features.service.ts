import { Service } from '@/core/core.service';
import { RoleFeaturesRepository } from '@/v2/repositories/database/role_features';
import { roleFeatures } from '@/db/schema';

export const roleFeaturesService = new Service(RoleFeaturesRepository, roleFeatures, { enableLogging: true })