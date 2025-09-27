import { Service } from "@/core/core.service";
import { IService } from "@/core/core.interface";
import { payments } from "@/db/schema/billing/payments";
import { PaymentRepository } from "@/v2/repositories/database/payments";

class PaymentService extends Service<typeof payments> {
  constructor() {
    super(new PaymentRepository());
  }
}

export const paymentService: IService<typeof payments> = new PaymentService();