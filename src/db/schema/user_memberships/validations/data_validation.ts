import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { userMemberships } from "..";

export const insertUserMembershipSchema = createInsertSchema(userMemberships);
export const selectUserMembershipSchema = createSelectSchema(userMemberships);