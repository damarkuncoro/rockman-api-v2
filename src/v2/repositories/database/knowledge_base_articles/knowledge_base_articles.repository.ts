import { Repository } from "../../../../core/core.repository";
import { knowledgeBaseArticles } from "../../../../db/schema/knowledge_base_articles/table";

export class KnowledgeBaseArticlesRepository extends Repository<typeof knowledgeBaseArticles> {
  constructor() {
    super(knowledgeBaseArticles);
  }
}
