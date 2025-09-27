import { IService } from '@/core/core.interface';
import {
  users,
  userEmployees,
  userCustomers,
  positions,
  employmentHistory,
  leaveRequests,
  performanceReviews,
  payrolls,
} from '@/db/schema';
import { SERVICE as s } from '@/core/core.service.registry';

interface IAppServiceRegistry {
  users: IService<typeof users>;
  userEmployees: IService<typeof userEmployees>;
  userCustomers: IService<typeof userCustomers>;
  positions: IService<typeof positions>;
  employmentHistory: IService<typeof employmentHistory>;
  leaveRequests: IService<typeof leaveRequests>;
  performanceReviews: IService<typeof performanceReviews>;
  payrolls: IService<typeof payrolls>;
}

export const SERVICE = s as unknown as IAppServiceRegistry;