import { memberships } from ".";

export type Membership = typeof memberships.$inferSelect;
export type NewMembership = typeof memberships.$inferInsert;