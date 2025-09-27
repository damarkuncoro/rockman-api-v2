import { pgTable, uuid, varchar, date, decimal, timestamp, index } from "drizzle-orm/pg-core";
import { users } from "../../users";
import { subscriptions } from "../subscriptions";

export const invoices = pgTable("invoices", {
  id: uuid("id").primaryKey().defaultRandom(),
  subscriptionId: uuid("subscription_id").references(() => subscriptions.id),
  userId: uuid("user_id").references(() => users.id),
  invoiceNumber: varchar("invoice_number", { length: 100 }).notNull().unique(),
  issueDate: date("issue_date").notNull(),
  dueDate: date("due_date").notNull(),
  totalAmount: decimal("total_amount", { precision: 10, scale: 2 }).notNull(),
  status: varchar("status", { length: 50 }).notNull(), // draft, sent, paid, overdue, void
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
}, (table) => {
  return {
    statusIdx: index("invoices_status_idx").on(table.status),
  };
});