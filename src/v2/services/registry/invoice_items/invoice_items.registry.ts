import { SERVICE } from "@/core/core.service.registry";
import { invoiceItemService } from "@/v2/services/database/invoice_items";

SERVICE.register("invoiceItems", invoiceItemService);