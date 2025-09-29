import { relations } from "drizzle-orm";
import { invoices } from "./table";
import { users } from "../../users";
import { customers } from "../../customers";
import { subscriptions } from "../subscriptions";
import { payments } from "../payments";

export const invoicesRelations = relations(invoices, ({ one, many }) => ({
  user: one(users, {
    fields: [invoices.userId],
    references: [users.id],
  }),
  customer: one(customers, {
    fields: [invoices.customerId],
    references: [customers.id],
  }),
  subscription: one(subscriptions, {
    fields: [invoices.subscriptionId],
    references: [subscriptions.id],
  }),
  payments: many(payments),
}));