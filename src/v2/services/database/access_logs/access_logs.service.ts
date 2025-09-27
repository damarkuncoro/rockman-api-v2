import { Service } from "@/core/core.service";
import { IService } from "@/core/core.interface";
import { accessLogs } from "@/db/schema/access_logs/table";
import { accessLogsRepository } from "@/v2/repositories/database/access_logs/";

class AccessLogsService extends Service<typeof accessLogs> {
  constructor() {
    super(accessLogsRepository);
  }
}

export const accessLogsService: IService<typeof accessLogs> = new AccessLogsService();