import { relations } from "drizzle-orm";
import { userPhones } from "./table";
import { users } from "../users";

export const userPhonesRelations = relations(userPhones, ({ one }) => ({
  user: one(users, {
    fields: [userPhones.userId],
    references: [users.id],
  }),
}));