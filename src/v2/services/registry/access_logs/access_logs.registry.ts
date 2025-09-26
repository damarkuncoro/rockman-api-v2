import SERVICE from "../../../../core/core.service.registry";
import { accessLogsService } from "../../database/access_logs/access_logs.service";

SERVICE.register("accessLogs", accessLogsService);