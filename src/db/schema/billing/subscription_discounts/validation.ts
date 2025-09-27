import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { subscriptionDiscounts } from "./table";
import { z } from "zod";

export const SubscriptionDiscountSchema = createSelectSchema(subscriptionDiscounts);
export const NewSubscriptionDiscountSchema = createInsertSchema(subscriptionDiscounts);
export const UpdateSubscriptionDiscountSchema = NewSubscriptionDiscountSchema.partial();

export type SubscriptionDiscount = z.infer<typeof SubscriptionDiscountSchema>;
export type NewSubscriptionDiscount = z.infer<typeof NewSubscriptionDiscountSchema>;
export type UpdateSubscriptionDiscount = z.infer<typeof UpdateSubscriptionDiscountSchema>;