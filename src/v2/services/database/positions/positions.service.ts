import { Service } from '@/core/core.service';
import { IService } from '@/core/core.interface';
import { positions } from '@/db/schema';
import { PositionRepository } from '@/v2/repositories/database/positions/positions.repository';

class PositionService extends Service<typeof positions> {
  constructor() {
    super(new PositionRepository());
  }
}

export const positionService: IService<typeof positions> = new PositionService();