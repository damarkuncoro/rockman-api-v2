import { Service } from "@/core/core.service";
import { paymentMethods } from "@/db/schema/billing/payment_methods";
import { PaymentMethodRepository } from "@/v2/repositories/database/payment_methods";

export class PaymentMethodService extends Service<typeof paymentMethods> {
  constructor() {
    super(new PaymentMethodRepository());
  }
}