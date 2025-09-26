import { pgTable, uuid, timestamp, text, varchar } from "drizzle-orm/pg-core";

export const outages = pgTable("outages", {
  id: uuid("id").primaryKey().defaultRandom(),
  startTime: timestamp("start_time", { withTimezone: true }).notNull(),
  endTime: timestamp("end_time", { withTimezone: true }),
  affectedArea: varchar("affected_area", { length: 255 }),
  description: text("description").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});