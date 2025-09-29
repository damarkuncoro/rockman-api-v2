import { pgTable, uuid, varchar, decimal, timestamp, index } from "drizzle-orm/pg-core";
import { users } from "../../users";
import { invoices } from "../invoices";
import { customers } from "../../customers";
import { payrolls } from "../../payrolls";
import { paymentStatusEnum } from "../../_common/enums";

export const payments = pgTable("payments", {
  id: uuid("id").primaryKey().defaultRandom(),
  invoiceId: uuid("invoice_id").references(() => invoices.id),
  payrollId: uuid("payroll_id").references(() => payrolls.id),
  userId: uuid("user_id").references(() => users.id),
  customerId: uuid("customer_id").references(() => customers.id),
  paymentDate: timestamp("payment_date", { withTimezone: true }).notNull(),
  amountPaid: decimal("amount_paid", { precision: 10, scale: 2 }).notNull(),
  paymentMethod: varchar("payment_method", { length: 100 }).notNull(), // credit_card, bank_transfer
  gatewayTransactionId: varchar("gateway_transaction_id", { length: 255 }),
  status: paymentStatusEnum("status").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
}, (table) => {
  return {
    userIdx: index("payments_user_id_idx").on(table.userId),
  };
});