import { relations } from "drizzle-orm";
import { knowledgeBaseArticles } from "./table";
import { ticketToKnowledgeBase } from "../ticket_to_knowledge_base";

export const knowledgeBaseArticlesRelations = relations(knowledgeBaseArticles, ({ many }) => ({
  ticketToKnowledgeBase: many(ticketToKnowledgeBase),
}));