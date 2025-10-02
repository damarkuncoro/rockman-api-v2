
import { API } from '@/v2/utils/api-handler';
import { customersService } from "@/v2/services/database/customers";

export const GET = API.GET.ById(customersService.GET.ById, "Customer");

