import { API } from '@/v2/utils/api-handler';
import { employeesService } from '@/v2/services/database/employees';

export const GET = API.GET.All(employeesService.GET.All, 'Employees');

