import { Service } from '@/core/core.service';
import { CreditNoteApplicationRepository } from '@/v2/repositories/database/credit_note_applications';
import { creditNoteApplications } from '@/db/schema';

export const creditNoteApplicationsService = new Service(CreditNoteApplicationRepository, creditNoteApplications, { enableLogging: true })