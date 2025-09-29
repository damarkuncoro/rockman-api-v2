import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { creditNoteApplications } from "../table";
import { z } from "zod";

export const CreditNoteApplicationSchema = createSelectSchema(creditNoteApplications);
export const NewCreditNoteApplicationSchema = createInsertSchema(creditNoteApplications);
export const UpdateCreditNoteApplicationSchema = NewCreditNoteApplicationSchema.partial();

export type CreditNoteApplication = z.infer<typeof CreditNoteApplicationSchema>;
export type NewCreditNoteApplication = z.infer<typeof NewCreditNoteApplicationSchema>;
export type UpdateCreditNoteApplication = z.infer<typeof UpdateCreditNoteApplicationSchema>;