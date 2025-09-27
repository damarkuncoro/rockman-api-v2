import { Repository } from "@/core/core.repository";
import { invoices } from "@/db/schema/billing/invoices";

export class InvoiceRepository extends Repository<typeof invoices> {
  constructor() {
    super(invoices);
  }
}