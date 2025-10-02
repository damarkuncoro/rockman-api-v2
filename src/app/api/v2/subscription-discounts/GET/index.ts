import { API } from '@/v2/utils/api-handler';
import { subscriptionDiscountsService } from '@/v2/services/database/subscription_discounts';

export const GET = API.GET.All(subscriptionDiscountsService.GET.All, 'Subscriptions');
