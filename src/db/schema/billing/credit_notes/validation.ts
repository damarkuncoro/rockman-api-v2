import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { creditNotes } from "./table";
import { z } from "zod";

export const CreditNoteSchema = createSelectSchema(creditNotes);
export const NewCreditNoteSchema = createInsertSchema(creditNotes);
export const UpdateCreditNoteSchema = NewCreditNoteSchema.partial();

export type CreditNote = z.infer<typeof CreditNoteSchema>;
export type NewCreditNote = z.infer<typeof NewCreditNoteSchema>;
export type UpdateCreditNote = z.infer<typeof UpdateCreditNoteSchema>;