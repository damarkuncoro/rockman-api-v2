import { Service } from '@/core/core.service';
import { UserCustomerRepository } from '@/v2/repositories/database/user_customers';
import { userCustomers } from '@/db/schema';

export const userCustomerService = new Service(UserCustomerRepository, userCustomers, { enableLogging: true })
