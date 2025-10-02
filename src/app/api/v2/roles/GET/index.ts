import { API } from '@/v2/utils/api-handler';
import { rolesService } from '@/v2/services/database/roles';

export const GET = API.GET.All(rolesService.GET.All, 'Roles');
