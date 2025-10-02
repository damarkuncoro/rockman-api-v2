import { accessLogsService } from '@/v2/services/database/access_logs';
import { API } from '@/v2/utils/api-handler';

export const GET = API.GET.ById(accessLogsService.GET.ById, "Access Log");