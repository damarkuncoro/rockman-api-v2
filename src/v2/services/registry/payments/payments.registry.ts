import { SERVICE } from "@/core/core.service.registry";
import { PaymentService } from "@/v2/services/database/payments";

SERVICE.register("payments", new PaymentService());