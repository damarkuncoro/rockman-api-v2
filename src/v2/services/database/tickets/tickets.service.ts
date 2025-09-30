import { Service } from '@/core/core.service';
import { TicketsRepository } from '@/v2/repositories/database/tickets';
import { tickets } from '@/db/schema';

export const ticketsService = new Service(TicketsRepository, tickets, { enableLogging: true })