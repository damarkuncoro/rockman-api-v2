import { pgTable, varchar, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { users } from "../users";
import { features } from "../features";
import { policies } from "../policies";

export const policyViolations = pgTable("policy_violations", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").references(() => users.id, { onDelete: "set null" }),
  featureId: uuid("feature_id").references(() => features.id, { onDelete: "set null" }),
  policyId: uuid("policy_id").references(() => policies.id, { onDelete: "set null" }),
  attribute: varchar("attribute", { length: 100 }).notNull(),
  expectedValue: text("expected_value").notNull(),
  actualValue: text("actual_value"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});