
import { userRolesService } from '@/v2/services/database/user_roles';
import { API } from '@/v2/utils/api-handler';


export const GET = API.GET.All(userRolesService.GET.All, 'UserRoles');
