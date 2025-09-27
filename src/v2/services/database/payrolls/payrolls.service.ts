import { Service } from '@/core/core.service';
import { IService } from '@/core/core.interface';
import { payrolls } from '@/db/schema';
import { PayrollRepository } from '@/v2/repositories/database/payrolls/payrolls.repository';

class PayrollService extends Service<typeof payrolls> {
  constructor() {
    super(new PayrollRepository());
  }
}

export const payrollService: IService<typeof payrolls> = new PayrollService();