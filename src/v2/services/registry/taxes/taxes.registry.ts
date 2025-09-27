import { SERVICE } from "@/core/core.service.registry";
import { taxService } from "@/v2/services/database/taxes";

SERVICE.register("taxes", taxService);