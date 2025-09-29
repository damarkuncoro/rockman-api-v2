import { Service as CoreService } from '../../../../core/core.service';
import { IService } from '@/core/core.interface';
import { employees } from '../../../../db/schema';
import { employeesRepository } from '../../../repositories/database/employees/employees.repository';

class EmployeesService
  extends CoreService<typeof employees>
  implements IService<typeof employees>
{
  constructor() {
    super(employeesRepository);
  }

  find = this.repository.find;
  FIND = {
    All: this.repository.SELECT.All,
    ById: this.repository.SELECT.ById,
  };
  GET = {
    All: this.repository.SELECT.All,
    ById: this.repository.SELECT.ById,
  };
  POST = {
    Create: this.repository.INSERT.One,
  };
  PUT = {
    Update: this.repository.UPDATE.One,
    ID: this.repository.UPDATE.One,
  };
  DELETE = {
    Remove: this.repository.DELETE.One,
    ID: this.repository.DELETE.One,
  };
}

export const employeesService: IService<typeof employees> = new EmployeesService();
export type TEmployeesService = typeof employeesService;