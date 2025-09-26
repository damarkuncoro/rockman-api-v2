import { relations } from "drizzle-orm";
import { userIdentities } from "./table";
import { users } from "../users";

export const userIdentitiesRelations = relations(userIdentities, ({ one }) => ({
  user: one(users, {
    fields: [userIdentities.userId],
    references: [users.id],
    relationName: "user_identities",
  }),
}));