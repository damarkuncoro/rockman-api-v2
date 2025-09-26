import { relations } from "drizzle-orm";
import { tickets } from "./table";
import { users } from "../users";
import { ticketToKnowledgeBase } from "../ticket_to_knowledge_base";

export const ticketsRelations = relations(tickets, ({ one, many }) => ({
  user: one(users, {
    fields: [tickets.userId],
    references: [users.id],
  }),
  assignedTo: one(users, {
    fields: [tickets.assignedTo],
    references: [users.id],
    relationName: "assigned_tickets",
  }),
  ticketToKnowledgeBase: many(ticketToKnowledgeBase),
}));