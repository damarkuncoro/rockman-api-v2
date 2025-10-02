import { API } from '@/v2/utils/api-handler';
import { discountsService } from "@/v2/services/database/discounts";

export const GET = API.GET.ById(discountsService.GET.ById, "Discount");
