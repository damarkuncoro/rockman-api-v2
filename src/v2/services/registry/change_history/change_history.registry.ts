import SERVICE from "@/core/core.service.registry";
import { changeHistoryService } from "@/v2/services/database/change_history/change_history.service";

SERVICE.register("changeHistory", changeHistoryService);