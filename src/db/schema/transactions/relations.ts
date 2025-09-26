import { relations } from "drizzle-orm";
import { transactions } from "./table";
import { users } from "../users";
import { userProducts } from "../user_products";

export const transactionsRelations = relations(transactions, ({ one }) => ({
  user: one(users, {
    fields: [transactions.userId],
    references: [users.id],
  }),
  userProduct: one(userProducts, {
    fields: [transactions.userProductId],
    references: [userProducts.id],
  }),
}));