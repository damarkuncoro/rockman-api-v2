import { SERVICE } from '@/core/core.service.registry';
import { positionService } from '@/v2/services/database/positions/positions.service';

SERVICE.register('positions', positionService);