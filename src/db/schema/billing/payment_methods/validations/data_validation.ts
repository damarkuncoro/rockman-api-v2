import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { paymentMethods } from "../table";
import { z } from "zod";

export const PaymentMethodSchema = createSelectSchema(paymentMethods);
export const NewPaymentMethodSchema = createInsertSchema(paymentMethods);
export const UpdatePaymentMethodSchema = NewPaymentMethodSchema.partial();

export type PaymentMethod = z.infer<typeof PaymentMethodSchema>;
export type NewPaymentMethod = z.infer<typeof NewPaymentMethodSchema>;
export type UpdatePaymentMethod = z.infer<typeof UpdatePaymentMethodSchema>;