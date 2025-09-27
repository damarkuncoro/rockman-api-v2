import { SERVICE } from "@/core/core.service.registry";
import { invoiceService } from "@/v2/services/database/invoices";

SERVICE.register("invoices", invoiceService);