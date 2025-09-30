import { relations } from "drizzle-orm";
import { userSettings } from "./table";
import { users } from "../users/table";

/**
 * Definisi relasi untuk tabel user_settings
 */
export const userSettingsRelations = relations(userSettings, ({ one }) => ({
  // Relasi one-to-one dengan tabel users
  user: one(users, {
    fields: [userSettings.userId],
    references: [users.id],
  }),
}));