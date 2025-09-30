import { Service } from '@/core/core.service';
import { FeatureCategoriesRepository } from '@/v2/repositories/database/feature_categories';
import { featureCategories } from '@/db/schema';

export const featureCategoriesService = new Service(FeatureCategoriesRepository, featureCategories, { enableLogging: true })