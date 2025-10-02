import { API } from '@/v2/utils/api-handler';
import { transactionsService } from '@/v2/services/database/transactions';

export const GET = API.GET.All(transactionsService.GET.All, 'Transactions');
