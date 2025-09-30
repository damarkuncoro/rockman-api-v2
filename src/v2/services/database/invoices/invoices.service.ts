import { Service } from '@/core/core.service';
import { InvoiceRepository } from '@/v2/repositories/database/invoices';
import { invoices } from '@/db/schema';

export const invoicesService = new Service(InvoiceRepository, invoices, { enableLogging: true })