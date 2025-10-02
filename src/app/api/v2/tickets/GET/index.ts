import { API } from '@/v2/utils/api-handler';
import { ticketsService } from '@/v2/services/database/tickets';

export const GET = API.GET.All(ticketsService.GET.All, 'Tickets');

