import { Repository } from "@/core/core.repository";
import { oneTimeCharges } from "@/db/schema/billing/one_time_charges";

export class OneTimeChargeRepository extends Repository<typeof oneTimeCharges> {
  constructor() {
    super(oneTimeCharges);
  }
}