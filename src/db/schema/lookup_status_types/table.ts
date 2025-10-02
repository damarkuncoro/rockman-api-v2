import { pgTable, uuid, varchar, text, timestamp } from 'drizzle-orm/pg-core';

/**
 * Tabel untuk menyimpan tipe-tipe status
 * Menggantikan penggunaan ENUM PostgreSQL untuk fleksibilitas
 */
export const lookupStatusTypes = pgTable('lookup_status_types', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 100 }).notNull().unique(),
  description: text('description'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});

// Tipe untuk lookup status type
export type LookupStatusType = typeof lookupStatusTypes.$inferSelect;
export type NewLookupStatusType = typeof lookupStatusTypes.$inferInsert;