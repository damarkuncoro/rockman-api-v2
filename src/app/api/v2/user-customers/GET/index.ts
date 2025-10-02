import { API } from '@/v2/utils/api-handler';
import { userCustomerService } from '@/v2/services/database/user_customers/';

export const GET = API.GET.All(userCustomerService.GET.All, 'UserCustomers');
