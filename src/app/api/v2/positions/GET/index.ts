import { API } from '@/v2/utils/api-handler';
import { positionsService } from '@/v2/services/database/positions';

export const GET = API.GET.All(positionsService.GET.All, 'Positions');
