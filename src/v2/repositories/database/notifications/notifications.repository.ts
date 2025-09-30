import { Repository } from "../../../../core/core.repository";
import { notifications } from "../../../../db/schema/notifications/table";

export class NotificationsRepository extends Repository<typeof notifications> {
  constructor() {
    super(notifications);
  }
}
