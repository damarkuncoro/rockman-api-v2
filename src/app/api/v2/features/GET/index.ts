import { API } from '@/v2/utils/api-handler';
import { featuresService } from '@/v2/services/database/features';

export const GET = API.GET.All(featuresService.GET.All, 'Features');
