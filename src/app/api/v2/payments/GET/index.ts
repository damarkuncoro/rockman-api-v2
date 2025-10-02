import { API } from '@/v2/utils/api-handler';
import { paymentsService } from '@/v2/services/database/payments';

export const GET = API.GET.All(paymentsService.GET.All, 'Payments');
