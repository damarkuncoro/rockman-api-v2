import { API } from '@/v2/utils/api-handler';
import { invoicesService } from '@/v2/services/database/invoices';

export const GET = API.GET.All(invoicesService.GET.All, 'Invoices');
