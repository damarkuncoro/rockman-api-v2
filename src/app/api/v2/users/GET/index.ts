import { usersService } from '@/v2/services/database/users';
import { API } from '@/v2/utils/api-handler';


export const GET = API.GET.All(usersService.GET.All, 'Users');
