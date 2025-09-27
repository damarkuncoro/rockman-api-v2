import { SERVICE } from "@/core/core.service.registry";
import { OneTimeChargeService } from "@/v2/services/database/one_time_charges";

SERVICE.register("oneTimeCharges", new OneTimeChargeService());