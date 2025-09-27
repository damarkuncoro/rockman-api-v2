import { IService } from "@/core/core.interface";
import { Service } from "../../../../core/core.service";
import { knowledgeBaseArticles } from "../../../../db/schema/knowledge_base_articles/table";
import { knowledgeBaseArticlesRepository } from "../../../repositories/database/knowledge_base_articles/knowledge_base_articles.repository";

class KnowledgeBaseArticlesService extends Service<typeof knowledgeBaseArticles> {
  constructor() {
    super(knowledgeBaseArticlesRepository);
  }
}

export const knowledgeBaseArticlesService: IService<typeof knowledgeBaseArticles> = new KnowledgeBaseArticlesService();