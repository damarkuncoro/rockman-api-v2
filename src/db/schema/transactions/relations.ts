import { relations } from "drizzle-orm";
import { transactions } from "./table";
import { users } from "../users";
import { payments } from "../billing/payments";

export const transactionsRelations = relations(transactions, ({ one }) => ({
  user: one(users, {
    fields: [transactions.userId],
    references: [users.id],
  }),
  payment: one(payments, {
    fields: [transactions.paymentId],
    references: [payments.id],
  }),
}));