import { Service } from '@/core/core.service';
import { UserSessionsRepository } from '@/v2/repositories/database/user_sessions';
import { userSessions } from '@/db/schema';

export const userSessionsService = new Service(UserSessionsRepository, userSessions, { enableLogging: true })