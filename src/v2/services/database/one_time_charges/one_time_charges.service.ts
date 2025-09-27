import { Service } from "@/core/core.service";
import { IService } from "@/core/core.interface";
import { oneTimeCharges } from "@/db/schema/billing/one_time_charges";
import { OneTimeChargeRepository } from "@/v2/repositories/database/one_time_charges";

class OneTimeChargeService extends Service<typeof oneTimeCharges> {
  constructor() {
    super(new OneTimeChargeRepository());
  }
}

export const oneTimeChargeService: IService<typeof oneTimeCharges> =
  new OneTimeChargeService();