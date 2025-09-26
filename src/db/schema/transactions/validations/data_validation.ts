import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { transactions } from "..";

export const insertTransactionSchema = createInsertSchema(transactions);
export const selectTransactionSchema = createSelectSchema(transactions);