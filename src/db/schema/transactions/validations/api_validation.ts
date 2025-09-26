import { z } from "zod";
import {
  insertTransactionSchema,
  updateTransactionSchema,
} from "./data_validation";

export const getTransactionByIdSchema = z.object({
  id: z.string(),
});

export const deleteTransactionByIdSchema = z.object({
  id: z.string(),
});

export const transactionSchema = insertTransactionSchema;
export const transactionUpdateSchema = updateTransactionSchema;