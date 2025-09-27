import { SERVICE } from "@/core/core.service.registry";
import { CreditNoteService } from "@/v2/services/database/credit_notes";

SERVICE.register("creditNotes", new CreditNoteService());