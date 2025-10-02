import { API } from '@/v2/utils/api-handler';
import { employmentHistoryService } from '@/v2/services/database/employment_history';

export const GET = API.GET.All(employmentHistoryService.GET.All, 'EmploymentHistory');
