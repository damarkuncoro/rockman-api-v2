import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { transactions } from "../table";
import { z } from "zod";

export const insertTransactionSchema = createInsertSchema(transactions, {
  id: z.string().optional(),
  amount: z.number(),
  userId: z.string(),
  userProductId: z.string().optional().nullable(),
});

export const updateTransactionSchema = createSelectSchema(transactions, {
  amount: z.number().optional(),
  userId: z.string().optional(),
  userProductId: z.string().optional().nullable(),
});