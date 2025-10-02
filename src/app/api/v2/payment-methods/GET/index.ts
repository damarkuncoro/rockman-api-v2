import { API } from '@/v2/utils/api-handler';
import { paymentMethodsService } from '@/v2/services/database/payment_methods'; 

export const GET = API.GET.All(paymentMethodsService.GET.All, 'PaymentMethods');

