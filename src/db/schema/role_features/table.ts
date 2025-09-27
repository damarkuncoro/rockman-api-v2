import { pgTable, boolean, uuid } from "drizzle-orm/pg-core";
import { roles } from "../roles";
import { features } from "../features";

export const roleFeatures = pgTable("role_features", {
  id: uuid("id").primaryKey().defaultRandom(),
  roleId: uuid("role_id").notNull().references(() => roles.id, { onDelete: "cascade" }),
  featureId: uuid("feature_id").notNull().references(() => features.id, { onDelete: "cascade" }),
  canCreate: boolean("can_create").default(false),
  canRead: boolean("can_read").default(false),
  canUpdate: boolean("can_update").default(false),
  canDelete: boolean("can_delete").default(false),
});