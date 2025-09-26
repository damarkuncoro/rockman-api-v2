import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { loyaltyPoints } from "..";

export const insertLoyaltyPointSchema = createInsertSchema(loyaltyPoints);
export const selectLoyaltyPointSchema = createSelectSchema(loyaltyPoints);