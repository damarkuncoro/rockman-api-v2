import { Service } from '@/core/core.service';
import { EmployeesRepository } from '@/v2/repositories/database/employees';
import { employees } from '@/db/schema';

export const employeesService = new Service(EmployeesRepository, employees, { enableLogging: true })