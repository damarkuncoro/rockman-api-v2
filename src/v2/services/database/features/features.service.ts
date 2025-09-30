import { Service } from '@/core/core.service';
import { FeaturesRepository } from '@/v2/repositories/database/features';
import { features } from '@/db/schema';

export const featuresService = new Service(FeaturesRepository, features, { enableLogging: true })