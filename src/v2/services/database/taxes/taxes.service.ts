import { Service } from '@/core/core.service';
import { TaxRepository } from '@/v2/repositories/database/taxes';
import { taxes } from '@/db/schema';

export const taxesService = new Service(TaxRepository, taxes, { enableLogging: true })