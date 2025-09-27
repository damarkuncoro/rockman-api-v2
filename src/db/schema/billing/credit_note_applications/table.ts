import { pgTable, uuid, decimal, date, timestamp } from "drizzle-orm/pg-core";
import { creditNotes } from "../credit_notes";
import { invoices } from "../invoices";

export const creditNoteApplications = pgTable("credit_note_applications", {
  id: uuid("id").primaryKey().defaultRandom(),
  creditNoteId: uuid("credit_note_id").references(() => creditNotes.id),
  invoiceId: uuid("invoice_id").references(() => invoices.id),
  amountApplied: decimal("amount_applied", { precision: 10, scale: 2 }).notNull(),
  applicationDate: date("application_date").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});