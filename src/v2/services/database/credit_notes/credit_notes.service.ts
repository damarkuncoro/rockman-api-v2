import { Service } from '@/core/core.service';
import { CreditNoteRepository } from '@/v2/repositories/database/credit_notes';
import { creditNotes } from '@/db/schema';

export const creditNotesService = new Service(CreditNoteRepository, creditNotes, { enableLogging: true })