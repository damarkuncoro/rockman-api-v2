import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { invoices } from "./table";
import { z } from "zod";

export const InvoiceSchema = createSelectSchema(invoices);
export const NewInvoiceSchema = createInsertSchema(invoices);
export const UpdateInvoiceSchema = NewInvoiceSchema.partial();

export type Invoice = z.infer<typeof InvoiceSchema>;
export type NewInvoice = z.infer<typeof NewInvoiceSchema>;
export type UpdateInvoice = z.infer<typeof UpdateInvoiceSchema>;