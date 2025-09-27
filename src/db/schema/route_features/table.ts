import { pgTable, varchar, uuid } from "drizzle-orm/pg-core";
import { features } from "../features";

export const routeFeatures = pgTable("route_features", {
  id: uuid("id").primaryKey().defaultRandom(),
  path: varchar("path", { length: 255 }).notNull(),
  method: varchar("method", { length: 10 }),
  featureId: uuid("feature_id").notNull().references(() => features.id, { onDelete: "cascade" }),
});