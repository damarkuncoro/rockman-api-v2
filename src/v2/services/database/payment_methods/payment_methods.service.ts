import { Service } from '@/core/core.service';
import { PaymentMethodRepository } from '@/v2/repositories/database/payment_methods';
import { paymentMethods } from '@/db/schema';

export const paymentMethodsService = new Service(PaymentMethodRepository, paymentMethods, { enableLogging: true })