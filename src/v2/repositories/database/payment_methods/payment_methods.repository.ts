import { Repository } from "@/core/core.repository";
import { paymentMethods } from "@/db/schema/billing/payment_methods";

export class PaymentMethodRepository extends Repository<typeof paymentMethods> {
  constructor() {
    super(paymentMethods);
  }
}