import { API } from '@/v2/utils/api-handler';
import { routeFeaturesService } from '@/v2/services/database/route_features';

export const GET = API.GET.All(routeFeaturesService.GET.All, 'RouteFeatures');
