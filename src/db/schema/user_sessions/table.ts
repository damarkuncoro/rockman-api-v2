import { pgTable, integer, text, timestamp, varchar, uuid, foreignKey } from "drizzle-orm/pg-core";
import { users } from "../users";

export const userSessions = pgTable("user_sessions", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  refreshToken: text("refresh_token").notNull().unique(),
  expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
},(table) => ({
	userIdFk: foreignKey({
		columns: [table.userId],
		foreignColumns: [users.id],
		name: "user_sessions_user_id_users_id_fk"
	}).onDelete("cascade"),
}));