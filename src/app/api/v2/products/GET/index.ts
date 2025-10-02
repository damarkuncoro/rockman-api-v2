import { API } from '@/v2/utils/api-handler';
import { productsService } from '@/v2/services/database/products';

export const GET = API.GET.All(productsService.GET.All, 'Products');
