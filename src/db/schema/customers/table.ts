import { pgTable, uuid, varchar, date, timestamp } from 'drizzle-orm/pg-core';
import { users } from '../users';
import { customerStatusEnum } from '../_common/enums';

export const customers = pgTable('customers', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id),
  customerType: varchar('customer_type', { length: 50 }),
  customerTier: varchar('customer_tier', { length: 50 }),
  customerSince: date('customer_since'),
  customerStatus: customerStatusEnum('customer_status'),
  customerSegment: varchar('customer_segment', { length: 100 }),
  deletedAt: timestamp("deleted_at", { withTimezone: true }),
});