import { IService } from "@/core/core.interface";
import { Service } from "@/core/core.service";
import { changeHistory } from "@/db/schema/change_history/table";
import { changeHistoryRepository } from "@/v2/repositories/database/change_history";

class ChangeHistoryService extends Service<typeof changeHistory> {
  constructor() {
    super(changeHistoryRepository);
  }
}

export const changeHistoryService: IService<typeof changeHistory> = new ChangeHistoryService();