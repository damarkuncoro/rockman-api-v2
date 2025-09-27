import { pgTable, uuid, varchar, date, text } from 'drizzle-orm/pg-core';
import { userEmployees } from '../user_employees';

export const leaveRequests = pgTable('leave_requests', {
  id: uuid('id').primaryKey().defaultRandom(),
  employeeId: uuid('employee_id').references(() => userEmployees.id),
  leaveType: varchar('leave_type', { length: 100 }).notNull(),
  startDate: date('start_date').notNull(),
  endDate: date('end_date').notNull(),
  status: varchar('status', { length: 50 }).notNull(),
  reason: text('reason'),
});