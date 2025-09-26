import { insertTransactionSchema } from "./data_validation";

export const postTransactionSchema = insertTransactionSchema.pick({
  userProductId: true,
  amount: true,
  paymentMethod: true,
});