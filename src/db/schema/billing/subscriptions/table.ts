import { pgTable, uuid, varchar, date, timestamp } from "drizzle-orm/pg-core";
import { users } from "../../users";
import { products } from "../../products";

export const subscriptions = pgTable("subscriptions", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").references(() => users.id),
  productId: uuid("product_id").references(() => products.id),
  status: varchar("status", { length: 50 }).notNull(), // active, canceled, past_due
  billingCycle: varchar("billing_cycle", { length: 50 }).notNull(), // monthly, yearly
  startDate: date("start_date").notNull(),
  endDate: date("end_date"),
  nextBillingDate: date("next_billing_date").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});