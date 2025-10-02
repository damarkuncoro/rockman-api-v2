import { changeHistoryService } from '@/v2/services/database/change_history';
import { API } from '@/v2/utils/api-handler';

export const GET = API.GET.ById(changeHistoryService.GET.ById, "Change History");