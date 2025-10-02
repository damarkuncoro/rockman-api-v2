import { API } from '@/v2/utils/api-handler';
import { performanceReviewsService } from '@/v2/services/database/performance_reviews';

export const GET = API.GET.All(performanceReviewsService.GET.All, 'PerformanceReviews');



