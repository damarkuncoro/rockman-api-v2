import { SERVICE } from "@/core/core.service.registry";
import { paymentMethodService } from "@/v2/services/database/payment_methods";

SERVICE.register("paymentMethods", paymentMethodService);