import { pgTable, uuid, varchar, date } from 'drizzle-orm/pg-core';
import { users } from '../users';

export const userCustomers = pgTable('user_customers', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id),
  customerType: varchar('customer_type', { length: 50 }),
  customerTier: varchar('customer_tier', { length: 50 }),
  customerSince: date('customer_since'),
  customerStatus: varchar('customer_status', { length: 50 }),
  customerSegment: varchar('customer_segment', { length: 100 }),
});