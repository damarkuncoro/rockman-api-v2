import { Service } from '@/core/core.service';
import { PositionRepository } from '@/v2/repositories/database/positions';
import { positions } from '@/db/schema';

export const positionsService = new Service(PositionRepository, positions, { enableLogging: true })