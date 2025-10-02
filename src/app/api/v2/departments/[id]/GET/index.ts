import { departmentsService } from '@/v2/services/database/departments';
import { API } from '@/v2/utils/api-handler';

export const GET = API.GET.ById(departmentsService.GET.ById, "Department");