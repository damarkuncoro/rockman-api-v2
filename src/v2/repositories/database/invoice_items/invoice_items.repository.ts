import { Repository } from "@/core/core.repository";
import { invoiceItems } from "@/db/schema/billing/invoice_items";

export class InvoiceItemRepository extends Repository<typeof invoiceItems> {
  constructor() {
    super(invoiceItems);
  }
}