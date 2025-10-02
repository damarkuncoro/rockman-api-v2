import { API } from '@/v2/utils/api-handler';
import { loyaltyPointsService } from '@/v2/services/database/loyalty_points';

export const GET = API.GET.ById(loyaltyPointsService.GET.ById, "LoyaltyPoints");

