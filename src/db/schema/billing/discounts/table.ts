import { pgTable, uuid, varchar, decimal, boolean, integer, timestamp } from "drizzle-orm/pg-core";
import { discountTypeEnum, discountDurationEnum } from "../../_common/enums";

export const discounts = pgTable("discounts", {
  id: uuid("id").primaryKey().defaultRandom(),
  code: varchar("code", { length: 100 }).notNull().unique(),
  discountType: discountTypeEnum("discount_type").notNull(),
  value: decimal("value", { precision: 10, scale: 2 }).notNull(),
  duration: discountDurationEnum("duration").notNull(),
  durationInMonths: integer("duration_in_months"),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});