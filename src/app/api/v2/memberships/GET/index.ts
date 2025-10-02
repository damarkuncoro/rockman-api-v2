import { API } from '@/v2/utils/api-handler';
import { membershipsService } from '@/v2/services/database/memberships';

export const GET = API.GET.All(membershipsService.GET.All, 'Memberships');
