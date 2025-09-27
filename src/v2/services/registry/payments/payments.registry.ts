import { SERVICE } from "@/core/core.service.registry";
import { paymentService } from "@/v2/services/database/payments";

SERVICE.register("payments", paymentService);