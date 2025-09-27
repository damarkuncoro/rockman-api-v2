import { SERVICE } from "@/core/core.service.registry";
import { InvoiceItemService } from "@/v2/services/database/invoice_items";

SERVICE.register("invoiceItems", new InvoiceItemService());