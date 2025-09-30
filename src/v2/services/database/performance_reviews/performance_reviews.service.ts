import { Service } from '@/core/core.service';
import { PerformanceReviewRepository } from '@/v2/repositories/database/performance_reviews';
import { performanceReviews } from '@/db/schema';

export const performanceReviewsService = new Service(PerformanceReviewRepository, performanceReviews, { enableLogging: true })