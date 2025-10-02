import { API } from '@/v2/utils/api-handler';
import { accessLogsService } from '@/v2/services/database/access_logs';

export const GET = API.GET.All(accessLogsService.GET.All, 'AccessLogs');

