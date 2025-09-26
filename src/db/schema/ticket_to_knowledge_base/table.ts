import { pgTable, uuid, primaryKey } from "drizzle-orm/pg-core";
import { tickets } from "../tickets";
import { knowledgeBaseArticles } from "../knowledge_base_articles";

export const ticketToKnowledgeBase = pgTable("ticket_to_knowledge_base", {
  ticketId: uuid("ticket_id").notNull().references(() => tickets.id),
  articleId: uuid("article_id").notNull().references(() => knowledgeBaseArticles.id),
}, (table) => ({
  pk: primaryKey({ columns: [table.ticketId, table.articleId] }),
}));