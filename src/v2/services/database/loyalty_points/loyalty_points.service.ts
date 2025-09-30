import { Service } from '@/core/core.service';
import { LoyaltyPointsRepository } from '@/v2/repositories/database/loyalty_points';
import { loyaltyPoints } from '@/db/schema';

export const loyaltyPointsService = new Service(LoyaltyPointsRepository, loyaltyPoints, { enableLogging: true })