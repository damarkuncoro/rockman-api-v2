import { pgTable, uuid, varchar, boolean, timestamp } from "drizzle-orm/pg-core";
import { users } from "../../users";

export const paymentMethods = pgTable("payment_methods", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").references(() => users.id),
  gatewayCustomerId: varchar("gateway_customer_id", { length: 255 }).notNull(),
  gatewayPaymentMethodId: varchar("gateway_payment_method_id", { length: 255 }).notNull(),
  cardBrand: varchar("card_brand", { length: 50 }),
  last4: varchar("last4", { length: 4 }),
  isDefault: boolean("is_default").default(false),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});