import { pgTable, uuid, varchar, date, decimal, timestamp } from "drizzle-orm/pg-core";
import { users } from "../../users";
import { invoices } from "../invoices";
import { creditNoteStatusEnum } from "../../_common/enums";

export const creditNotes = pgTable("credit_notes", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").references(() => users.id),
  originalInvoiceId: uuid("original_invoice_id").references(() => invoices.id),
  creditNoteNumber: varchar("credit_note_number", { length: 100 }).notNull().unique(),
  issueDate: date("issue_date").notNull(),
  totalAmount: decimal("total_amount", { precision: 10, scale: 2 }).notNull(),
  reason: varchar("reason", { length: 255 }),
  status: creditNoteStatusEnum("status").notNull(),
  remainingBalance: decimal("remaining_balance", { precision: 10, scale: 2 }).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});