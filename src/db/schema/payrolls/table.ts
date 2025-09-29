import { pgTable, uuid, date, numeric, timestamp } from 'drizzle-orm/pg-core';
import { employees } from '../employees';
import { users } from '../users';
import { payrollStatusEnum } from '../_common/enums';

export const payrolls = pgTable('payrolls', {
  id: uuid('id').primaryKey().defaultRandom(),
  employeeId: uuid('employee_id').references(() => employees.id),
  payPeriodStart: date('pay_period_start').notNull(),
  payPeriodEnd: date('pay_period_end').notNull(),
  grossSalary: numeric('gross_salary', { precision: 10, scale: 2 }).notNull(),
  netSalary: numeric('net_salary', { precision: 10, scale: 2 }).notNull(),
  deductions: numeric('deductions', { precision: 10, scale: 2 }),
  paymentDate: date('payment_date').notNull(),
  status: payrollStatusEnum('status').notNull().default('Draft'),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  approvedBy: uuid('approved_by').references(() => users.id),
});