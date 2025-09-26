import { Service } from "../../../../core/core.service";
import { accessLogs } from "../../../../db/schema/access_logs/table";
import { accessLogsRepository } from "../../../repositories/database/access_logs/access_logs.repository";

class AccessLogsService extends Service<typeof accessLogs> {
  constructor() {
    super(accessLogsRepository);
  }
}

export const accessLogsService = new AccessLogsService();