import { pgTable, integer, varchar, text, timestamp, json, uuid } from "drizzle-orm/pg-core";
import { users } from "../users";

export const changeHistory = pgTable("change_history", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").references(() => users.id, { onDelete: "set null" }),
  tableName: varchar("table_name", { length: 100 }).notNull(),
  recordId: integer("record_id").notNull(),
  action: varchar("action", { length: 10 }).notNull(),
  oldValues: json("old_values"),
  newValues: json("new_values"),
  reason: text("reason"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});