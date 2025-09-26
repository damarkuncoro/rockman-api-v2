import { Repository } from "../../../../core/core.repository";
import { userSessions } from "../../../../db/schema/user_sessions/table";

class UserSessionsRepository extends Repository<typeof userSessions> {
  constructor() {
    super(userSessions);
  }
}

export const userSessionsRepository = new UserSessionsRepository();