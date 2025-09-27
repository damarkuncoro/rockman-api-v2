import { SERVICE } from '@/core/core.service.registry';
import { userCustomerService } from '@/v2/services/database/user_customers/user_customers.service';

SERVICE.register('userCustomers', userCustomerService);