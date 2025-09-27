import { pgTable, varchar, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { featureCategories } from "../feature_categories";

export const features = pgTable("features", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 100 }).notNull().unique(),
  description: text("description"),
  categoryId: uuid("category_id").references(() => featureCategories.id),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});