import { pgTable, uuid, varchar, text } from 'drizzle-orm/pg-core';
import { departments } from '../departments';

export const positions = pgTable('positions', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: varchar('title', { length: 100 }).notNull(),
  description: text('description'),
  departmentId: uuid('department_id').references(() => departments.id),
});