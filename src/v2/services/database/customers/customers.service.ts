import { Service } from '@/core/core.service';
import { CustomersRepository } from '@/v2/repositories/database/customers';
import { customers } from '@/db/schema';

export const customersService = new Service(CustomersRepository, customers, { enableLogging: true })
