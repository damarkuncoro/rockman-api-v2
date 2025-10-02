import { API } from '@/v2/utils/api-handler';
import { knowledgeBaseArticlesService } from '@/v2/services/database/knowledge_base_articles';

export const GET = API.GET.All(knowledgeBaseArticlesService.GET.All, 'KnowledgeBaseArticles');
