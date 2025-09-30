import { Service } from '@/core/core.service';
import { DepartmentsRepository } from '@/v2/repositories/database/departments';
import { departments } from '@/db/schema';

export const departmentsService = new Service(DepartmentsRepository, departments, { enableLogging: true })