import { IService } from "@/core/core.interface";
import { Service } from "@/core/core.service";
import { creditNoteApplications } from "@/db/schema/billing/credit_note_applications";
import { CreditNoteApplicationRepository } from "@/v2/repositories/database/credit_note_applications";

class CreditNoteApplicationService extends Service<typeof creditNoteApplications> {
  constructor() {
    super(new CreditNoteApplicationRepository());
  }
}

export const creditNoteApplicationService: IService<
  typeof creditNoteApplications
> = new CreditNoteApplicationService();