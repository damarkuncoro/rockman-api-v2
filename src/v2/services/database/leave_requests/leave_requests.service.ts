import { Service } from '@/core/core.service';
import { LeaveRequestRepository } from '@/v2/repositories/database/leave_requests';
import { leaveRequests } from '@/db/schema';

export const leaveRequestsService = new Service(LeaveRequestRepository, leaveRequests, { enableLogging: true })