import { Service } from '@/core/core.service';
import { NotificationsRepository } from '@/v2/repositories/database/notifications';
import { notifications } from '@/db/schema';

export const notificationsService = new Service(NotificationsRepository, notifications, { enableLogging: true })