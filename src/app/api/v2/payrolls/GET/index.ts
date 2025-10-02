import { API } from '@/v2/utils/api-handler';
import { payrollsService } from '@/v2/services/database/payrolls';

export const GET = API.GET.All(payrollsService.GET.All, 'Payrolls');
