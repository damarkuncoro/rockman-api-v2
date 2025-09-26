import { Repository } from "../../../../core/core.repository";
import { notifications } from "../../../../db/schema/notifications/table";

class NotificationsRepository extends Repository<typeof notifications> {
  constructor() {
    super(notifications);
  }
}

export const notificationsRepository = new NotificationsRepository();