import { SERVICE } from '@/core/core.service.registry';
import { payrollService } from '@/v2/services/database/payrolls/payrolls.service';

SERVICE.register('payrolls', payrollService);