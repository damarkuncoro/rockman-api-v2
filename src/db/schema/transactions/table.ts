import { pgTable, varchar, decimal, timestamp, uuid, index } from "drizzle-orm/pg-core";
import { users } from "../users";
import { transactionStatusEnum } from "../_common/enums";
import { payments } from "../billing/payments";
import { userProducts } from "../user_products";

export const transactions = pgTable("transactions", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  paymentId: uuid("payment_id").references(() => payments.id).notNull(),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  userProductId: uuid("user_product_id").references(() => userProducts.id),
  status: transactionStatusEnum("status").notNull(),
  paymentMethod: varchar("payment_method", { length: 50 }),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
}, (table) => {
  return {
    userIdx: index("transactions_user_id_idx").on(table.userId),
  };
});