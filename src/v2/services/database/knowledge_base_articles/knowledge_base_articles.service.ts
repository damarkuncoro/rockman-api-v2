import { Service } from '@/core/core.service';
import { KnowledgeBaseArticlesRepository } from '@/v2/repositories/database/knowledge_base_articles';
import { knowledgeBaseArticles } from '@/db/schema';

export const knowledgeBaseArticlesService = new Service(KnowledgeBaseArticlesRepository, knowledgeBaseArticles, { enableLogging: true })