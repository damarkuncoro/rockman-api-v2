import { SERVICE } from "@/core/core.service.registry";
import { creditNoteService } from "@/v2/services/database/credit_notes";

SERVICE.register("creditNotes", creditNoteService);