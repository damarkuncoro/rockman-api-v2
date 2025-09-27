import { Service } from '@/core/core.service';
import { IService } from '@/core/core.interface';
import { userEmployees } from '@/db/schema';
import { UserEmployeeRepository } from '@/v2/repositories/database/user_employees/user_employees.repository';

class UserEmployeeService extends Service<typeof userEmployees> {
  constructor() {
    super(new UserEmployeeRepository());
  }
}

export const userEmployeeService: IService<typeof userEmployees> = new UserEmployeeService();