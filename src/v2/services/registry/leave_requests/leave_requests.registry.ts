import { SERVICE } from '@/core/core.service.registry';
import { leaveRequestService } from '@/v2/services/database/leave_requests/leave_requests.service';

SERVICE.register('leaveRequests', leaveRequestService);