import { Service } from "@/core/core.service";
import { oneTimeCharges } from "@/db/schema/billing/one_time_charges";
import { OneTimeChargeRepository } from "@/v2/repositories/database/one_time_charges";

export class OneTimeChargeService extends Service<typeof oneTimeCharges> {
  constructor() {
    super(new OneTimeChargeRepository());
  }
}