import { Repository } from '@/core/core.repository';
import { userCustomers } from '@/db/schema';

export class UserCustomerRepository extends Repository<typeof userCustomers> {
  constructor() {
    super(userCustomers);
  }
}


