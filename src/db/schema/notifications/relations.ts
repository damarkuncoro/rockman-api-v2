import { relations } from "drizzle-orm";
import { notifications } from "./table";
import { users } from "../users";

export const notificationsRelations = relations(notifications, ({ one }) => ({
  user: one(users, {
    fields: [notifications.userId],
    references: [users.id],
  }),
}));