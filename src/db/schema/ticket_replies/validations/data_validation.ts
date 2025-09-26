import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { ticketReplies } from "..";

export const insertTicketReplySchema = createInsertSchema(ticketReplies);
export const selectTicketReplySchema = createSelectSchema(ticketReplies);