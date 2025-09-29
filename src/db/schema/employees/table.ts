import { pgTable, uuid, varchar, date, text, timestamp } from 'drizzle-orm/pg-core';
import { users } from '../users';
import { genderEnum, maritalStatusEnum } from '../_common/enums';

export const employees = pgTable('employees', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id),
  firstName: varchar('first_name', { length: 100 }).notNull(),
  lastName: varchar('last_name', { length: 100 }).notNull(),
  dateOfBirth: date('date_of_birth'),
  gender: genderEnum('gender'),
  maritalStatus: maritalStatusEnum('marital_status'),
  nationality: varchar('nationality', { length: 100 }),
  personalEmail: varchar('personal_email', { length: 255 }),
  phoneNumber: varchar('phone_number', { length: 20 }),
  address: text('address'),
  deletedAt: timestamp("deleted_at", { withTimezone: true }),
});