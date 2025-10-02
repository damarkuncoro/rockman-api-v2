import { customerEquipmentService } from '@/v2/services/database/customer_equipment';
import { API } from '@/v2/utils/api-handler';

export const GET = API.GET.ById(customerEquipmentService.GET.ById, "Customer Equipment");