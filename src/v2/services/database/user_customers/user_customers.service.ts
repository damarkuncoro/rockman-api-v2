import { Service } from '@/core/core.service';
import { IService } from '@/core/core.interface';
import { userCustomers } from '@/db/schema';
import { UserCustomerRepository } from '@/v2/repositories/database/user_customers/user_customers.repository';

class UserCustomerService extends Service<typeof userCustomers> {
  constructor() {
    super(new UserCustomerRepository());
  }
}

export const userCustomerService: IService<typeof userCustomers> = new UserCustomerService();