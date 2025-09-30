import { Service } from '@/core/core.service';
import { PayrollRepository } from '@/v2/repositories/database/payrolls';
import { payrolls } from '@/db/schema';

export const payrollsService = new Service(PayrollRepository, payrolls, { enableLogging: true })