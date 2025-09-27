import { SERVICE } from "@/core/core.service.registry";
import { creditNoteApplicationService } from "@/v2/services/database/credit_note_applications";

SERVICE.register("creditNoteApplications", creditNoteApplicationService);