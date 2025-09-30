import { Service } from '@/core/core.service';
import { InvoiceItemRepository } from '@/v2/repositories/database/invoice_items';
import { invoiceItems } from '@/db/schema';

export const invoiceItemsService = new Service(InvoiceItemRepository, invoiceItems, { enableLogging: true })