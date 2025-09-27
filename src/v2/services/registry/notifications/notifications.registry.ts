import SERVICE from "@/core/core.service.registry";
import { notificationsService } from "@/v2/services/database/notifications";

SERVICE.register("notifications", notificationsService);