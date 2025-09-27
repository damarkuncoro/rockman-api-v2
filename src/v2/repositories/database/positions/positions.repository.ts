import { Repository } from '@/core/core.repository';
import { positions } from '@/db/schema';

export class PositionRepository extends Repository<typeof positions> {
  constructor() {
    super(positions);
  }
}