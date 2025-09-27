import SERVICE from "@/core/core.service.registry";
import { usersService } from "@/v2/services/database/users/users.service";

SERVICE.register("users", usersService);