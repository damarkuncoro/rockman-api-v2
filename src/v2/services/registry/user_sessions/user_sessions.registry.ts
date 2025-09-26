import SERVICE from "../../../../core/core.service.registry";
import { userSessionsService } from "../../database/user_sessions/user_sessions.service";

SERVICE.register("userSessions", userSessionsService);