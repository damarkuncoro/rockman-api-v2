import { IService } from "@/core/core.interface";
import { Service } from "@/core/core.service";
import { knowledgeBaseArticles } from "@/db/schema/knowledge_base_articles/table";
import { knowledgeBaseArticlesRepository } from "@/v2/repositories/database/knowledge_base_articles";

class KnowledgeBaseArticlesService extends Service<typeof knowledgeBaseArticles> {
  constructor() {
    super(knowledgeBaseArticlesRepository);
  }
}

export const knowledgeBaseArticlesService: IService<typeof knowledgeBaseArticles> = new KnowledgeBaseArticlesService();