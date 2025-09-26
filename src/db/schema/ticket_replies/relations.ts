import { relations } from "drizzle-orm";
import { ticketReplies } from "./table";
import { users } from "../users";
import { tickets } from "../tickets";

export const ticketRepliesRelations = relations(ticketReplies, ({ one }) => ({
  user: one(users, {
    fields: [ticketReplies.userId],
    references: [users.id],
  }),
  ticket: one(tickets, {
    fields: [ticketReplies.ticketId],
    references: [tickets.id],
  }),
}));