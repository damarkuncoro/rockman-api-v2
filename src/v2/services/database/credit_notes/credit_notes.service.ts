import { Service } from "@/core/core.service";
import { creditNotes } from "@/db/schema/billing/credit_notes";
import { CreditNoteRepository } from "@/v2/repositories/database/credit_notes";

export class CreditNoteService extends Service<typeof creditNotes> {
  constructor() {
    super(new CreditNoteRepository());
  }
}