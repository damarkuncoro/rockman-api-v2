import { Repository } from "../../../../core/core.repository";
import { knowledgeBaseArticles } from "../../../../db/schema/knowledge_base_articles/table";

class KnowledgeBaseArticlesRepository extends Repository<typeof knowledgeBaseArticles> {
  constructor() {
    super(knowledgeBaseArticles);
  }
}

export const knowledgeBaseArticlesRepository = new KnowledgeBaseArticlesRepository();