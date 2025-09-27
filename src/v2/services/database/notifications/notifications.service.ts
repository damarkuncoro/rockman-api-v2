import { IService } from "@/core/core.interface";
import { Service } from "../../../../core/core.service";
import { notifications } from "../../../../db/schema/notifications/table";
import { notificationsRepository } from "../../../repositories/database/notifications/notifications.repository";

class NotificationsService extends Service<typeof notifications> {
  constructor() {
    super(notificationsRepository);
  }
}

export const notificationsService: IService<typeof notifications> = new NotificationsService();