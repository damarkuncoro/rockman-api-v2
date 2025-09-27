import SERVICE from "@/core/core.service.registry";
import { accessLogsService } from "@/v2/services/database/access_logs/access_logs.service";

SERVICE.register("accessLogs", accessLogsService);