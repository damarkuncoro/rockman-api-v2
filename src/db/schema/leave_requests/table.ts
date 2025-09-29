import { pgTable, uuid, date, text } from 'drizzle-orm/pg-core';
import { employees } from '../employees';
import { leaveRequestStatusEnum, leaveTypeEnum } from '../_common/enums';

export const leaveRequests = pgTable('leave_requests', {
  id: uuid('id').primaryKey().defaultRandom(),
  employeeId: uuid('employee_id').references(() => employees.id),
  leaveType: leaveTypeEnum('leave_type').notNull(),
  startDate: date('start_date').notNull(),
  endDate: date('end_date').notNull(),
  status: leaveRequestStatusEnum('status').notNull(),
  reason: text('reason'),
});