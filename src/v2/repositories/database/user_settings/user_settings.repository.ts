import { Repository } from "@/core/core.repository";
import { userSettings } from "@/db/schema/user_settings/table";

/**
 * Repository untuk mengelola data pengaturan pengguna
 */
export class UserSettingsRepository extends Repository<typeof userSettings> {
  constructor() {
    super(userSettings);
  }
}