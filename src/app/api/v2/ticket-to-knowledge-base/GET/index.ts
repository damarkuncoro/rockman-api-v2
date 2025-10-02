import { API } from '@/v2/utils/api-handler';
import { ticketToKnowledgeBaseService } from '@/v2/services/database/ticket_to_knowledge_base';

export const GET = API.GET.All(ticketToKnowledgeBaseService.GET.All, 'TicketToKnowledgeBase');
