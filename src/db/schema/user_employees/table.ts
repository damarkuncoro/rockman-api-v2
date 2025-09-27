import { pgTable, uuid, varchar, date, text } from 'drizzle-orm/pg-core';
import { users } from '../users';

export const userEmployees = pgTable('user_employees', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id),
  firstName: varchar('first_name', { length: 100 }).notNull(),
  lastName: varchar('last_name', { length: 100 }).notNull(),
  dateOfBirth: date('date_of_birth'),
  gender: varchar('gender', { length: 50 }),
  maritalStatus: varchar('marital_status', { length: 50 }),
  nationality: varchar('nationality', { length: 100 }),
  personalEmail: varchar('personal_email', { length: 255 }),
  phoneNumber: varchar('phone_number', { length: 20 }),
  address: text('address'),
});