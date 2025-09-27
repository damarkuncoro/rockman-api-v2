import { SERVICE } from '@/core/core.service.registry';
import { performanceReviewService } from '@/v2/services/database/performance_reviews/performance_reviews.service';

SERVICE.register('performanceReviews', performanceReviewService);