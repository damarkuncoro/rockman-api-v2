import { Repository } from '@/core/core.repository';
import { employmentHistory } from '@/db/schema';

export class EmploymentHistoryRepository extends Repository<
  typeof employmentHistory
> {
  constructor() {
    super(employmentHistory);
  }
}