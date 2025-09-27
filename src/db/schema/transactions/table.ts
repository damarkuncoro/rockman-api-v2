import { pgTable, varchar, decimal, timestamp, uuid } from "drizzle-orm/pg-core";
import { users } from "../users";
import { userProducts } from "../user_products";

export const transactions = pgTable("transactions", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  userProductId: uuid("user_product_id").notNull().references(() => userProducts.id, { onDelete: "cascade" }),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  status: varchar("status", { length: 50 }).notNull(), // e.g., pending, completed, failed
  paymentMethod: varchar("payment_method", { length: 50 }),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});