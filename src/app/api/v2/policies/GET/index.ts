import { API } from '@/v2/utils/api-handler';
import { policiesService } from '@/v2/services/database/policies';

export const GET = API.GET.All(policiesService.GET.All, 'Policies');


