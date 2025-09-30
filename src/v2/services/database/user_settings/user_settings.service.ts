import { Service } from '@/core/core.service';
import { UserSettingsRepository } from '@/v2/repositories/database/user_settings';
import { userSettings } from '@/db/schema';

/**
 * Service untuk mengelola data pengaturan pengguna
 */
export const userSettingsService = new Service(UserSettingsRepository, userSettings, { enableLogging: true });