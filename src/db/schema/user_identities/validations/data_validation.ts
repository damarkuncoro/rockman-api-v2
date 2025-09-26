import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { userIdentities } from "..";

export const insertUserIdentitySchema = createInsertSchema(userIdentities);
export const selectUserIdentitySchema = createSelectSchema(userIdentities);