import { SERVICE } from "@/core/core.service.registry";
import { TaxService } from "@/v2/services/database/taxes";

SERVICE.register("taxes", new TaxService());