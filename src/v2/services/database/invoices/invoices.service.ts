import { Service } from "@/core/core.service";
import { IService } from "@/core/core.interface";
import { invoices } from "@/db/schema/billing/invoices";
import { InvoiceRepository } from "@/v2/repositories/database/invoices";

class InvoiceService extends Service<typeof invoices> {
  constructor() {
    super(new InvoiceRepository());
  }
}

export const invoiceService: IService<typeof invoices> = new InvoiceService();