import SERVICE from "@/core/core.service.registry";
import { knowledgeBaseArticlesService } from "@/v2/services/database/knowledge_base_articles";

SERVICE.register("knowledgeBaseArticles", knowledgeBaseArticlesService);