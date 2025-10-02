import { API } from '@/v2/utils/api-handler';
import { customerEquipmentService } from '@/v2/services/database/customer_equipment';

export const GET = API.GET.All(customerEquipmentService.GET.All, 'CustomerEquipment');



