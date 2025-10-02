import { API } from '@/v2/utils/api-handler';
import { userProductsService } from '@/v2/services/database/user_products';


export const GET = API.GET.All(userProductsService.GET.All, 'UserProducts');
