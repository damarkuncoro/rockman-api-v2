import { pgTable, uuid, date, integer, text } from 'drizzle-orm/pg-core';
import { userEmployees } from '../user_employees';
import { users } from '../users';

export const performanceReviews = pgTable('performance_reviews', {
  id: uuid('id').primaryKey().defaultRandom(),
  employeeId: uuid('employee_id').references(() => userEmployees.id),
  reviewerId: uuid('reviewer_id').references(() => users.id),
  reviewDate: date('review_date').notNull(),
  rating: integer('rating').notNull(),
  comments: text('comments'),
});