import { pgTable, timestamp, uuid } from "drizzle-orm/pg-core";
import { users } from "../users";
import { products } from "../products";

export const userProducts = pgTable("user_products", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  productId: uuid("product_id").notNull().references(() => products.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});