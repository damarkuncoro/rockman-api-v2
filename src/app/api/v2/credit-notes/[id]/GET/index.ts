import { creditNotesService } from '@/v2/services/database/credit_notes';
import { API } from '@/v2/utils/api-handler';

export const GET = API.GET.ById(creditNotesService.GET.ById, "Credit Note");