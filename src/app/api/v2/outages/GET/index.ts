import { API } from '@/v2/utils/api-handler';
import { outagesService } from '@/v2/services/database/outages';

export const GET = API.GET.All(outagesService.GET.All, 'Outages');

