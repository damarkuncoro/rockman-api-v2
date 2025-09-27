import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { payments } from "./table";
import { z } from "zod";

export const PaymentSchema = createSelectSchema(payments);
export const NewPaymentSchema = createInsertSchema(payments);
export const UpdatePaymentSchema = NewPaymentSchema.partial();

export type Payment = z.infer<typeof PaymentSchema>;
export type NewPayment = z.infer<typeof NewPaymentSchema>;
export type UpdatePayment = z.infer<typeof UpdatePaymentSchema>;