import { pgTable, varchar, boolean, timestamp, uuid } from "drizzle-orm/pg-core";

export const roles = pgTable("roles", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 100 }).notNull().unique(),
  grantsAll: boolean("grants_all").default(false),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});