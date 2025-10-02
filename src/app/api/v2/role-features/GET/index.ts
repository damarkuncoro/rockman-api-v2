import { API } from '@/v2/utils/api-handler';
import { roleFeaturesService } from '@/v2/services/database/role_features';

export const GET = API.GET.All(roleFeaturesService.GET.All, 'RoleFeatures');
