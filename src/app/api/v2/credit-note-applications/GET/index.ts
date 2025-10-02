import { API } from '@/v2/utils/api-handler';
import { creditNoteApplicationsService } from '@/v2/services/database/credit_note_applications';

export const GET = API.GET.All(creditNoteApplicationsService.GET.All, 'CreditNoteApplications');