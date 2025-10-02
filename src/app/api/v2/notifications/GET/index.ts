import { API } from '@/v2/utils/api-handler';
import { notificationsService } from '@/v2/services/database/notifications';

export const GET = API.GET.All(notificationsService.GET.All, 'Notifications');

