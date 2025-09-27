import { Repository } from '@/core/core.repository';
import { leaveRequests } from '@/db/schema';

export class LeaveRequestRepository extends Repository<typeof leaveRequests> {
  constructor() {
    super(leaveRequests);
  }
}