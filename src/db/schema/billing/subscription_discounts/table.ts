import { pgTable, uuid, timestamp, primaryKey } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { subscriptions } from "../subscriptions/table";
import { discounts } from "../discounts/table";

export const subscriptionDiscounts = pgTable("subscription_discounts", {
  subscriptionId: uuid("subscription_id").references(() => subscriptions.id).notNull(),
  discountId: uuid("discount_id").references(() => discounts.id).notNull(),
  appliedAt: timestamp("applied_at", { withTimezone: true }).notNull().defaultNow(),
}, (table) => {
  return {
    pk: primaryKey({ columns: [table.subscriptionId, table.discountId] }),
  };
});

export const subscriptionDiscountsRelations = relations(subscriptionDiscounts, ({ one }) => ({
  subscription: one(subscriptions, {
    fields: [subscriptionDiscounts.subscriptionId],
    references: [subscriptions.id],
  }),
  discount: one(discounts, {
    fields: [subscriptionDiscounts.discountId],
    references: [discounts.id],
  }),
}));