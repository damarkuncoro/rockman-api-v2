import { Repository } from "@/core/core.repository";
import { taxes } from "@/db/schema/billing/taxes";

export class TaxRepository extends Repository<typeof taxes> {
  constructor() {
    super(taxes);
  }
}