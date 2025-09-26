import { relations } from "drizzle-orm";
import { memberships } from "./table";
import { userMemberships } from "../user_memberships";

export const membershipsRelations = relations(memberships, ({ many }) => ({
  userMemberships: many(userMemberships),
}));