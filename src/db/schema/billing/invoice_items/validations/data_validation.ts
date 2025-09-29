import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { invoiceItems } from "../table";
import { z } from "zod";

export const InvoiceItemSchema = createSelectSchema(invoiceItems);
export const NewInvoiceItemSchema = createInsertSchema(invoiceItems);
export const UpdateInvoiceItemSchema = NewInvoiceItemSchema.partial();

export type InvoiceItem = z.infer<typeof InvoiceItemSchema>;
export type NewInvoiceItem = z.infer<typeof NewInvoiceItemSchema>;
export type UpdateInvoiceItem = z.infer<typeof UpdateInvoiceItemSchema>;