import { API } from '@/v2/utils/api-handler';
import { changeHistoryService } from '@/v2/services/database/change_history';

export const GET = API.GET.All(changeHistoryService.GET.All, 'ChangeHistory');
