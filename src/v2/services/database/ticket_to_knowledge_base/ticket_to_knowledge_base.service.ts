import { Service } from '@/core/core.service';
import { TicketToKnowledgeBaseRepository } from '@/v2/repositories/database/ticket_to_knowledge_base';
import { ticketToKnowledgeBase } from '@/db/schema';

export const ticketToKnowledgeBaseService = new Service(TicketToKnowledgeBaseRepository, ticketToKnowledgeBase, { enableLogging: true })