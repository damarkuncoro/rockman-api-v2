import { relations } from "drizzle-orm";
import { userProducts } from "./table";
import { users } from "../users";
import { products } from "../products";

export const userProductsRelations = relations(userProducts, ({ one }) => ({
  user: one(users, {
    fields: [userProducts.userId],
    references: [users.id],
  }),
  product: one(products, {
    fields: [userProducts.productId],
    references: [products.id],
  }),
}));