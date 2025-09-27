import { Repository } from "@/core/core.repository";
import { payments } from "@/db/schema/billing/payments";

export class PaymentRepository extends Repository<typeof payments> {
  constructor() {
    super(payments);
  }
}