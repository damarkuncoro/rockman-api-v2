import { Repository } from "@/core/core.repository";
import { creditNoteApplications } from "@/db/schema/billing/credit_note_applications";

export class CreditNoteApplicationRepository extends Repository<typeof creditNoteApplications> {
  constructor() {
    super(creditNoteApplications);
  }
}