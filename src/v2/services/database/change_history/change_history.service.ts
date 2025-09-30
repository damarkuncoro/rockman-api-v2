import { Service } from '@/core/core.service';
import { ChangeHistoryRepository } from '@/v2/repositories/database/change_history';
import { changeHistory } from '@/db/schema';

export const changeHistoryService = new Service(ChangeHistoryRepository, changeHistory, { enableLogging: true })