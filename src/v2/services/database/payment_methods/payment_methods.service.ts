import { Service } from "@/core/core.service";
import { IService } from "@/core/core.interface";
import { paymentMethods } from "@/db/schema/billing/payment_methods";
import { PaymentMethodRepository } from "@/v2/repositories/database/payment_methods";

class PaymentMethodService extends Service<typeof paymentMethods> {
  constructor() {
    super(new PaymentMethodRepository());
  }
}

export const paymentMethodService: IService<typeof paymentMethods> =
  new PaymentMethodService();