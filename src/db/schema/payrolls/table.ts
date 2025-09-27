import { pgTable, uuid, date, numeric } from 'drizzle-orm/pg-core';
import { userEmployees } from '../user_employees';

export const payrolls = pgTable('payrolls', {
  id: uuid('id').primaryKey().defaultRandom(),
  employeeId: uuid('employee_id').references(() => userEmployees.id),
  payPeriodStart: date('pay_period_start').notNull(),
  payPeriodEnd: date('pay_period_end').notNull(),
  grossSalary: numeric('gross_salary', { precision: 10, scale: 2 }).notNull(),
  netSalary: numeric('net_salary', { precision: 10, scale: 2 }).notNull(),
  deductions: numeric('deductions', { precision: 10, scale: 2 }),
  paymentDate: date('payment_date').notNull(),
});