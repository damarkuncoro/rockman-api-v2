import SERVICE from "../../../../core/core.service.registry";
import { changeHistoryService } from "../../database/change_history/change_history.service";

SERVICE.register("changeHistory", changeHistoryService);