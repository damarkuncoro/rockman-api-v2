import { API } from '@/v2/utils/api-handler';
import { subscriptionsService } from '@/v2/services/database/subscriptions';

export const GET = API.GET.All(subscriptionsService.GET.All, 'Subscriptions');
