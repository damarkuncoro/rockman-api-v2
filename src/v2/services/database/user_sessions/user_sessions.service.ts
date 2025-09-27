import { IService } from "@/core/core.interface";
import { Service } from "../../../../core/core.service";
import { userSessions } from "../../../../db/schema/user_sessions/table";
import { userSessionsRepository } from "../../../repositories/database/user_sessions/user_sessions.repository";

class UserSessionsService extends Service<typeof userSessions> {
  constructor() {
    super(userSessionsRepository);
  }
}

export const userSessionsService: IService<typeof userSessions> = new UserSessionsService();