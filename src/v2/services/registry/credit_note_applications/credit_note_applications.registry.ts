import { SERVICE } from "@/core/core.service.registry";
import { CreditNoteApplicationService } from "@/v2/services/database/credit_note_applications";

SERVICE.register("creditNoteApplications", new CreditNoteApplicationService());