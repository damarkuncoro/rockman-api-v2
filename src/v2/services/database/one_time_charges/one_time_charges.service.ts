import { Service } from '@/core/core.service';
import { OneTimeChargeRepository } from '@/v2/repositories/database/one_time_charges';
import { oneTimeCharges } from '@/db/schema';

export const oneTimeChargesService = new Service(OneTimeChargeRepository, oneTimeCharges, { enableLogging: true })