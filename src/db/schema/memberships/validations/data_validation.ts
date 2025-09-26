import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { memberships } from "..";

export const insertMembershipSchema = createInsertSchema(memberships);
export const selectMembershipSchema = createSelectSchema(memberships);