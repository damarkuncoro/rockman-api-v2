import { Service } from '@/core/core.service';
import { TransactionsRepository } from '@/v2/repositories/database/transactions';
import { transactions } from '@/db/schema';

export const transactionsService = new Service(TransactionsRepository, transactions, { enableLogging: true })