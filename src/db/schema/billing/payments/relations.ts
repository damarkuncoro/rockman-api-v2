import { relations } from "drizzle-orm";
import { payments } from "./table";
import { users } from "../../users";
import { invoices } from "../invoices";
import { customers } from "../../customers";
import { transactions } from "../../transactions";

export const paymentsRelations = relations(payments, ({ one, many }) => ({
  user: one(users, {
    fields: [payments.userId],
    references: [users.id],
  }),
  customer: one(customers, {
    fields: [payments.customerId],
    references: [customers.id],
  }),
  invoice: one(invoices, {
    fields: [payments.invoiceId],
    references: [invoices.id],
  }),
  transactions: many(transactions),
}));