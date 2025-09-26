import { pgTable, integer, varchar, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { features } from "../features";

export const policies = pgTable("policies", {
  id: uuid("id").primaryKey().defaultRandom(),
  featureId: uuid("feature_id").notNull().references(() => features.id, { onDelete: "cascade" }),
  attribute: varchar("attribute", { length: 100 }).notNull(),
  operator: varchar("operator", { length: 10 }).notNull(),
  value: text("value").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});