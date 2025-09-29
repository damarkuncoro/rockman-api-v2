import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { discounts } from "../table";
import { z } from "zod";

export const DiscountSchema = createSelectSchema(discounts);
export const NewDiscountSchema = createInsertSchema(discounts);
export const UpdateDiscountSchema = NewDiscountSchema.partial();

export type Discount = z.infer<typeof DiscountSchema>;
export type NewDiscount = z.infer<typeof NewDiscountSchema>;
export type UpdateDiscount = z.infer<typeof UpdateDiscountSchema>;