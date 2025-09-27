import { SERVICE } from "@/core/core.service.registry";
import { InvoiceService } from "@/v2/services/database/invoices";

SERVICE.register("invoices", new InvoiceService());