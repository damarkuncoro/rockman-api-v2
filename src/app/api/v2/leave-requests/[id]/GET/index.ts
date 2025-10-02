import { API } from '@/v2/utils/api-handler';
import { leaveRequestsService } from '@/v2/services/database/leave_requests';

export const GET = API.GET.ById(leaveRequestsService.GET.ById, "LeaveRequest");
