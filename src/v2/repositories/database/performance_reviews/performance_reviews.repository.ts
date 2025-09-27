import { Repository } from '@/core/core.repository';
import { performanceReviews } from '@/db/schema';

export class PerformanceReviewRepository extends Repository<
  typeof performanceReviews
> {
  constructor() {
    super(performanceReviews);
  }
}