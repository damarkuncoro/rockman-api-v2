import { API } from '@/v2/utils/api-handler';
import { featureCategoriesService } from '@/v2/services/database/feature_categories';

export const GET = API.GET.ById(featureCategoriesService.GET.ById, "FeatureCategory");
