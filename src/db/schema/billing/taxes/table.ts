import { pgTable, uuid, varchar, decimal, boolean, timestamp } from "drizzle-orm/pg-core";

export const taxes = pgTable("taxes", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 100 }).notNull(),
  ratePercentage: decimal("rate_percentage", { precision: 5, scale: 2 }).notNull(),
  region: varchar("region", { length: 100 }),
  isInclusive: boolean("is_inclusive").default(false),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});