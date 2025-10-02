import { pgTable, uuid, varchar, text, timestamp, integer, boolean } from 'drizzle-orm/pg-core';
import { lookupStatusTypes } from '../lookup_status_types/table';
/**
 * Tabel untuk menyimpan nilai-nilai status
 * Terhubung dengan tipe status melalui type_id
 */
export const lookupStatusValues = pgTable('lookup_status_values', {
  id: uuid('id').primaryKey().defaultRandom(),
  typeId: uuid('type_id').notNull().references(() => lookupStatusTypes.id, { onDelete: 'cascade' }),
  value: varchar('value', { length: 100 }).notNull(),
  label: varchar('label', { length: 100 }).notNull(),
  description: text('description'),
  sortOrder: integer('sort_order').default(0).notNull(),
  isDefault: boolean('is_default').default(false).notNull(),
  isActive: boolean('is_active').default(true).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});

// Tipe untuk lookup status value
export type LookupStatusValue = typeof lookupStatusValues.$inferSelect;
export type NewLookupStatusValue = typeof lookupStatusValues.$inferInsert;