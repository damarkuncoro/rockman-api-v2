import { SERVICE } from "@/core/core.service.registry";
import { oneTimeChargeService } from "@/v2/services/database/one_time_charges";

SERVICE.register("oneTimeCharges", oneTimeChargeService);