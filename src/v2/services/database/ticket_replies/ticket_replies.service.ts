import { Service } from '@/core/core.service';
import { TicketRepliesRepository } from '@/v2/repositories/database/ticket_replies';
import { ticketReplies } from '@/db/schema';

export const ticketRepliesService = new Service(TicketRepliesRepository, ticketReplies, { enableLogging: true })