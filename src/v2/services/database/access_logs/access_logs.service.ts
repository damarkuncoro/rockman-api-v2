import { Service } from '@/core/core.service';
import { AccessLogsRepository } from '@/v2/repositories/database/access_logs';
import { accessLogs } from '@/db/schema';

export const accessLogsService = new Service(AccessLogsRepository, accessLogs, { enableLogging: true })