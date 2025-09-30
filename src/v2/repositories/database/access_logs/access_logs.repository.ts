import { Repository } from "@/core/core.repository";
import { accessLogs } from "@/db/schema/access_logs/table";

export class AccessLogsRepository extends Repository<typeof accessLogs> {
  constructor() {
    super(accessLogs);
  }
}
