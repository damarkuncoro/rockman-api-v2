import { relations } from "drizzle-orm";
import { customers } from "./table";
import { users } from "../users";
import { invoices } from "../billing/invoices";
import { payments } from "../billing/payments";

export const customersRelations = relations(customers, ({ one, many }) => ({
  user: one(users, {
    fields: [customers.userId],
    references: [users.id],
  }),
  invoices: many(invoices),
  payments: many(payments),
}));