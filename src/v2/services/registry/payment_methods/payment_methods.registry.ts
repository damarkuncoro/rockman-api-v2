import { SERVICE } from "@/core/core.service.registry";
import { PaymentMethodService } from "@/v2/services/database/payment_methods";

SERVICE.register("paymentMethods", new PaymentMethodService());