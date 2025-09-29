import { pgTable, uuid, date } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { employees } from '../employees/table';
import { positions } from '../positions/table';

export const employmentHistory = pgTable('employment_history', {
  id: uuid('id').primaryKey().defaultRandom(),
  employeeId: uuid('employee_id').references(() => employees.id),
  positionId: uuid('position_id').references(() => positions.id),
  startDate: date('start_date').notNull(),
  endDate: date('end_date'),
});

export const employmentHistoryRelations = relations(employmentHistory, ({ one }) => ({
  userEmployee: one(employees, {
    fields: [employmentHistory.employeeId],
    references: [employees.id],
  }),
  position: one(positions, {
    fields: [employmentHistory.positionId],
    references: [positions.id],
  }),
}));