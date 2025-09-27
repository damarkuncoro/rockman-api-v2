import { Repository } from '@/core/core.repository';
import { payrolls } from '@/db/schema';

export class PayrollRepository extends Repository<typeof payrolls> {
  constructor() {
    super(payrolls);
  }
}