import { Service } from "../../../../core/core.service";
import { changeHistory } from "../../../../db/schema/change_history/table";
import { changeHistoryRepository } from "../../../repositories/database/change_history/change_history.repository";

class ChangeHistoryService extends Service<typeof changeHistory> {
  constructor() {
    super(changeHistoryRepository);
  }
}

export const changeHistoryService = new ChangeHistoryService();