import { pgTable, varchar, text, timestamp, boolean, serial, uuid } from "drizzle-orm/pg-core";

export const featureCategories = pgTable("feature_categories", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 100 }).notNull().unique(),
  description: text("description"),
  slug: varchar("slug", { length: 100 }).notNull().unique(),
  color: varchar("color", { length: 7 }).default("#3B82F6"),
  icon: varchar("icon", { length: 50 }).default("IconSettings"),
  isActive: boolean("is_active").default(true).notNull(),
  sortOrder: serial("sort_order"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});