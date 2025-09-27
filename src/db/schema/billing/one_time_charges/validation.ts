import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { oneTimeCharges } from "./table";
import { z } from "zod";

export const OneTimeChargeSchema = createSelectSchema(oneTimeCharges);
export const NewOneTimeChargeSchema = createInsertSchema(oneTimeCharges);
export const UpdateOneTimeChargeSchema = NewOneTimeChargeSchema.partial();

export type OneTimeCharge = z.infer<typeof OneTimeChargeSchema>;
export type NewOneTimeCharge = z.infer<typeof NewOneTimeChargeSchema>;
export type UpdateOneTimeCharge = z.infer<typeof UpdateOneTimeChargeSchema>;