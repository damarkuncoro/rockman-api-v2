import { API } from '@/v2/utils/api-handler';
import { networkEquipmentService } from '@/v2/services/database/network_equipment';

export const GET = API.GET.All(networkEquipmentService.GET.All, 'NetworkEquipment');
