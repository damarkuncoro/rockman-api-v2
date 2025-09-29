import { pgTable, uuid, varchar, date, timestamp, index } from "drizzle-orm/pg-core";
import { users } from "../../users";
import { products } from "../../products";
import { subscriptionStatusEnum } from "../../_common/enums";

export const subscriptions = pgTable("subscriptions", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").references(() => users.id),
  productId: uuid("product_id").references(() => products.id),
  status: subscriptionStatusEnum("status").notNull(),
  billingCycle: varchar("billing_cycle", { length: 50 }).notNull(), // monthly, yearly
  startDate: date("start_date").notNull(),
  endDate: date("end_date"),
  nextBillingDate: date("next_billing_date").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  deletedAt: timestamp("deleted_at", { withTimezone: true }),
}, (table) => {
  return {
    userIdx: index("subscriptions_user_id_idx").on(table.userId),
  };
});