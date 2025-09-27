import { Repository } from '@/core/core.repository';
import { userEmployees } from '@/db/schema';

export class UserEmployeeRepository extends Repository<typeof userEmployees> {
  constructor() {
    super(userEmployees);
  }
}