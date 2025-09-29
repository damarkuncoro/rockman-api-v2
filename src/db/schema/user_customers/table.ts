import { pgTable, uuid } from 'drizzle-orm/pg-core';
import { users } from '../users';
import { customers } from '../customers';

export const userCustomers = pgTable('user_customers', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  customerId: uuid('customer_id')
    .notNull()
    .references(() => customers.id, { onDelete: 'cascade' }),
});