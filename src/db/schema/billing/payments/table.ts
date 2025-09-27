import { pgTable, uuid, varchar, decimal, timestamp } from "drizzle-orm/pg-core";
import { users } from "../../users";
import { invoices } from "../invoices";

export const payments = pgTable("payments", {
  id: uuid("id").primaryKey().defaultRandom(),
  invoiceId: uuid("invoice_id").references(() => invoices.id),
  userId: uuid("user_id").references(() => users.id),
  paymentDate: timestamp("payment_date", { withTimezone: true }).notNull(),
  amountPaid: decimal("amount_paid", { precision: 10, scale: 2 }).notNull(),
  paymentMethod: varchar("payment_method", { length: 100 }).notNull(), // credit_card, bank_transfer
  transactionId: varchar("transaction_id", { length: 255 }),
  status: varchar("status", { length: 50 }).notNull(), // succeeded, failed, pending
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});