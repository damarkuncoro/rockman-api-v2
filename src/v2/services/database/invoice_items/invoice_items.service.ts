import { IService } from "@/core/core.interface";
import { Service } from "@/core/core.service";
import { invoiceItems } from "@/db/schema/billing/invoice_items";
import { InvoiceItemRepository } from "@/v2/repositories/database/invoice_items";

class InvoiceItemService extends Service<typeof invoiceItems> {
  constructor() {
    super(new InvoiceItemRepository());
  }
}

export const invoiceItemService: IService<typeof invoiceItems> =
  new InvoiceItemService();