import { Service } from "@/core/core.service";
import { payments } from "@/db/schema/billing/payments";
import { PaymentRepository } from "@/v2/repositories/database/payments";

export class PaymentService extends Service<typeof payments> {
  constructor() {
    super(new PaymentRepository());
  }
}