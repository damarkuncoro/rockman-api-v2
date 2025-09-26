import { relations } from "drizzle-orm";
import { products } from "./table";
import { userProducts } from "../user_products";

export const productsRelations = relations(products, ({ many }) => ({
  userProducts: many(userProducts),
}));