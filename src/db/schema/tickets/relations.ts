import { relations } from "drizzle-orm";
import { tickets } from "./table";
import { users } from "../users";
import { ticketReplies } from "../ticket_replies";

export const ticketsRelations = relations(tickets, ({ one, many }) => ({
  user: one(users, {
    fields: [tickets.userId],
    references: [users.id],
  }),
  ticketReplies: many(ticketReplies),
}));