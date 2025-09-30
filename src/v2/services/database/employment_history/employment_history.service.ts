import { Service } from '@/core/core.service';
import { EmploymentHistoryRepository } from '@/v2/repositories/database/employment_history';
import { employmentHistory } from '@/db/schema';

export const employmentHistoryService = new Service(EmploymentHistoryRepository, employmentHistory, { enableLogging: true })