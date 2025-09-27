import { Service } from '@/core/core.service';
import { IService } from '@/core/core.interface';
import { performanceReviews } from '@/db/schema';
import { PerformanceReviewRepository } from '@/v2/repositories/database/performance_reviews/performance_reviews.repository';

class PerformanceReviewService extends Service<typeof performanceReviews> {
  constructor() {
    super(new PerformanceReviewRepository());
  }
}

export const performanceReviewService: IService<typeof performanceReviews> =
  new PerformanceReviewService();