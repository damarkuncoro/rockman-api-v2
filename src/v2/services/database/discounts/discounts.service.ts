import { Service } from '@/core/core.service';
import { DiscountRepository } from '@/v2/repositories/database/discounts';
import { discounts } from '@/db/schema';

export const discountsService = new Service(DiscountRepository, discounts, { enableLogging: true })