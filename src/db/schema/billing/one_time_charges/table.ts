import { pgTable, uuid, varchar, decimal, boolean, timestamp } from "drizzle-orm/pg-core";
import { users } from "../../users";

export const oneTimeCharges = pgTable("one_time_charges", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").references(() => users.id),
  description: varchar("description", { length: 255 }).notNull(),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  hasBeenInvoiced: boolean("has_been_invoiced").default(false),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});