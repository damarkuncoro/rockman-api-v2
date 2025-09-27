import { Service } from "@/core/core.service";
import { invoiceItems } from "@/db/schema/billing/invoice_items";
import { InvoiceItemRepository } from "@/v2/repositories/database/invoice_items";

export class InvoiceItemService extends Service<typeof invoiceItems> {
  constructor() {
    super(new InvoiceItemRepository());
  }
}