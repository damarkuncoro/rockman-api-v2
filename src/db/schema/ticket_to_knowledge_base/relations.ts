import { relations } from "drizzle-orm";
import { ticketToKnowledgeBase } from "./table";
import { tickets } from "../tickets";
import { knowledgeBaseArticles } from "../knowledge_base_articles";

export const ticketToKnowledgeBaseRelations = relations(ticketToKnowledgeBase, ({ one }) => ({
  ticket: one(tickets, {
    fields: [ticketToKnowledgeBase.ticketId],
    references: [tickets.id],
  }),
  article: one(knowledgeBaseArticles, {
    fields: [ticketToKnowledgeBase.articleId],
    references: [knowledgeBaseArticles.id],
  }),
}));