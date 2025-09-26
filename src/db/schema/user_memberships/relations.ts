import { relations } from "drizzle-orm";
import { userMemberships } from "./table";
import { users } from "../users";
import { memberships } from "../memberships";

export const userMembershipsRelations = relations(userMemberships, ({ one }) => ({
  user: one(users, {
    fields: [userMemberships.userId],
    references: [users.id],
    relationName: "user_memberships",
  }),
  membership: one(memberships, {
    fields: [userMemberships.membershipId],
    references: [memberships.id],
  }),
}));