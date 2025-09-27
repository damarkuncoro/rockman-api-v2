import { Service } from '@/core/core.service';
import { IService } from '@/core/core.interface';
import { employmentHistory } from '@/db/schema';
import { EmploymentHistoryRepository } from '@/v2/repositories/database/employment_history/employment_history.repository';

class EmploymentHistoryService extends Service<typeof employmentHistory> {
  constructor() {
    super(new EmploymentHistoryRepository());
  }
}

export const employmentHistoryService: IService<typeof employmentHistory> =
  new EmploymentHistoryService();