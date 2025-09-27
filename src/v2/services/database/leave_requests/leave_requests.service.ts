import { Service } from '@/core/core.service';
import { IService } from '@/core/core.interface';
import { leaveRequests } from '@/db/schema';
import { LeaveRequestRepository } from '@/v2/repositories/database/leave_requests/leave_requests.repository';

class LeaveRequestService extends Service<typeof leaveRequests> {
  constructor() {
    super(new LeaveRequestRepository());
  }
}

export const leaveRequestService: IService<typeof leaveRequests> =
  new LeaveRequestService();