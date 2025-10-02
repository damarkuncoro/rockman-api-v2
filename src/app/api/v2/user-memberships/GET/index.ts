import { API } from '@/v2/utils/api-handler';
import { userMembershipsService } from '@/v2/services/database/user_memberships';

export const GET = API.GET.All(userMembershipsService.GET.All, 'UserMemberships');
