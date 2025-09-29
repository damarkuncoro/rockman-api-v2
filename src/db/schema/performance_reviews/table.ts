import { pgTable, uuid, date, text } from 'drizzle-orm/pg-core';
import { employees } from '../employees';
import { users } from '../users';
import { performanceRatingEnum } from '../_common/enums';

export const performanceReviews = pgTable('performance_reviews', {
  id: uuid('id').primaryKey().defaultRandom(),
  employeeId: uuid('employee_id').references(() => employees.id),
  reviewerId: uuid('reviewer_id').references(() => users.id),
  reviewDate: date('review_date').notNull(),
  rating: performanceRatingEnum('rating').notNull(),
  comments: text('comments'),
});