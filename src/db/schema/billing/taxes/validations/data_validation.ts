import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { taxes } from "../table";
import { z } from "zod";

export const TaxSchema = createSelectSchema(taxes);
export const NewTaxSchema = createInsertSchema(taxes);
export const UpdateTaxSchema = NewTaxSchema.partial();

export type Tax = z.infer<typeof TaxSchema>;
export type NewTax = z.infer<typeof NewTaxSchema>;
export type UpdateTax = z.infer<typeof UpdateTaxSchema>;