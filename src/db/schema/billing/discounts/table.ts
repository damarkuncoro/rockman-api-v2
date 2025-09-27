import { pgTable, uuid, varchar, decimal, boolean, integer, timestamp } from "drizzle-orm/pg-core";

export const discounts = pgTable("discounts", {
  id: uuid("id").primaryKey().defaultRandom(),
  code: varchar("code", { length: 100 }).notNull().unique(),
  discountType: varchar("discount_type", { length: 50 }).notNull(), // percentage, fixed_amount
  value: decimal("value", { precision: 10, scale: 2 }).notNull(),
  duration: varchar("duration", { length: 50 }).notNull(), // once, forever, repeating
  durationInMonths: integer("duration_in_months"),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});