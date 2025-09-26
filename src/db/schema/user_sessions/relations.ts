import { relations } from "drizzle-orm";
import { userSessions } from "./table";
import { users } from "../users";

/**
 * Relations untuk sessions table
 * 
 * Domain: Authentication
 * Responsibility: Mengelola relasi antar tabel sessions
 */
export const userSessionsRelations = relations(userSessions, ({ one }) => ({
  user: one(users, {
    fields: [userSessions.userId],
    references: [users.id],
    relationName: "user_sessions",
  }),
}));