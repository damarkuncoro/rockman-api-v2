import { API } from '@/v2/utils/api-handler';
import { invoiceItemsService } from '@/v2/services/database/invoice_items';


export const GET = API.GET.All(invoiceItemsService.GET.All, 'InvoiceItems');

