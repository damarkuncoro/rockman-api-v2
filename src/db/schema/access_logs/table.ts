import { pgTable, integer, varchar, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { users } from "../users";
import { roles } from "../roles";
import { features } from "../features";

export const accessLogs = pgTable("access_logs", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").references(() => users.id, { onDelete: "set null" }),
  roleId: uuid("role_id").references(() => roles.id, { onDelete: "set null" }),
  featureId: uuid("feature_id").references(() => features.id, { onDelete: "set null" }),
  path: varchar("path", { length: 255 }).notNull(),
  method: varchar("method", { length: 10 }),
  decision: varchar("decision", { length: 10 }).notNull(),
  reason: text("reason"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});