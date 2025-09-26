import SERVICE from "../../../../core/core.service.registry";
import { notificationsService } from "../../database/notifications/notifications.service";

SERVICE.register("notifications", notificationsService);