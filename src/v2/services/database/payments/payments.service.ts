import { Service } from '@/core/core.service';
import { PaymentRepository } from '@/v2/repositories/database/payments';
import { payments } from '@/db/schema';

export const paymentsService = new Service(PaymentRepository, payments, { enableLogging: true })