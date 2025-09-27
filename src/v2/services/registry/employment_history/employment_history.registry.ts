import { SERVICE } from '@/core/core.service.registry';
import { employmentHistoryService } from '@/v2/services/database/employment_history/employment_history.service';

SERVICE.register('employmentHistory', employmentHistoryService);