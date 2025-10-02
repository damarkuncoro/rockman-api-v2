import { creditNoteApplicationsService } from '@/v2/services/database/credit_note_applications';
import { API } from '@/v2/utils/api-handler';

export const GET = API.GET.ById(creditNoteApplicationsService.GET.ById, "Credit Note Application");