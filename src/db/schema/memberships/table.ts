import { pgTable, uuid, varchar, text, integer, decimal } from "drizzle-orm/pg-core";

export const memberships = pgTable("memberships", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  minPoints: integer("min_points").notNull().default(0),
  discountPercentage: decimal("discount_percentage", { precision: 5, scale: 2 }).notNull().default("0"),
});