import { Service } from "@/core/core.service";
import { invoices } from "@/db/schema/billing/invoices";
import { InvoiceRepository } from "@/v2/repositories/database/invoices";

export class InvoiceService extends Service<typeof invoices> {
  constructor() {
    super(new InvoiceRepository());
  }
}