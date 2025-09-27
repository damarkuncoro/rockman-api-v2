import { pgTable, uuid, timestamp, primaryKey } from "drizzle-orm/pg-core";
import { subscriptions } from "../subscriptions";
import { discounts } from "../discounts";

export const subscriptionDiscounts = pgTable("subscription_discounts", {
  subscriptionId: uuid("subscription_id").references(() => subscriptions.id),
  discountId: uuid("discount_id").references(() => discounts.id),
  appliedAt: timestamp("applied_at", { withTimezone: true }).notNull().defaultNow(),
}, (table) => {
  return {
    pk: primaryKey({ columns: [table.subscriptionId, table.discountId] }),
  };
});