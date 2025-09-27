import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { subscriptions } from "./table";
import { z } from "zod";

export const SubscriptionSchema = createSelectSchema(subscriptions);
export const NewSubscriptionSchema = createInsertSchema(subscriptions);
export const UpdateSubscriptionSchema = NewSubscriptionSchema.partial();

export type Subscription = z.infer<typeof SubscriptionSchema>;
export type NewSubscription = z.infer<typeof NewSubscriptionSchema>;
export type UpdateSubscription = z.infer<typeof UpdateSubscriptionSchema>;