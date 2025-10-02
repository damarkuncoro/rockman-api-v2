import { API } from '@/v2/utils/api-handler';
import { ticketRepliesService } from '@/v2/services/database/ticket_replies';

export const GET = API.GET.All(ticketRepliesService.GET.All, 'TicketReplies');
