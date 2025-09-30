import { Repository } from "../../../../core/core.repository";
import { changeHistory } from "../../../../db/schema/change_history/table";

export class ChangeHistoryRepository extends Repository<typeof changeHistory> {
  constructor() {
    super(changeHistory);
  }
}
