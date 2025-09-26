import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { tickets } from "..";

export const insertTicketSchema = createInsertSchema(tickets);
export const selectTicketSchema = createSelectSchema(tickets);