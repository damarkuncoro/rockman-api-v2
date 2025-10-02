import { API } from '@/v2/utils/api-handler';
import { knowledgeBaseArticlesService } from '@/v2/services/database/knowledge_base_articles';

export const GET = API.GET.ById(knowledgeBaseArticlesService.GET.ById, "KnowledgeBaseArticle");
