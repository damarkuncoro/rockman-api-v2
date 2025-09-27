import { Repository } from "@/core/core.repository";
import { creditNotes } from "@/db/schema/billing/credit_notes";

export class CreditNoteRepository extends Repository<typeof creditNotes> {
  constructor() {
    super(creditNotes);
  }
}