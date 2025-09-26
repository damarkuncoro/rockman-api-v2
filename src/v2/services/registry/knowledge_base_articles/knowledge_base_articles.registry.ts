import SERVICE from "../../../../core/core.service.registry";
import { knowledgeBaseArticlesService } from "../../database/knowledge_base_articles/knowledge_base_articles.service";

SERVICE.register("knowledgeBaseArticles", knowledgeBaseArticlesService);