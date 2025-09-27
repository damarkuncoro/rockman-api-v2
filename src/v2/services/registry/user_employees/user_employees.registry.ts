import { SERVICE } from '@/core/core.service.registry';
import { userEmployeeService } from '@/v2/services/database/user_employees/user_employees.service';

SERVICE.register('userEmployees', userEmployeeService);