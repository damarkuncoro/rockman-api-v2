import { API } from '@/v2/utils/api-handler';
import { creditNotesService } from '@/v2/services/database/credit_notes';

export const GET = API.GET.All(creditNotesService.GET.All, 'CreditNotes');
