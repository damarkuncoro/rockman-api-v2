import SERVICE from "../../../../core/core.service.registry";
import { usersService } from "../../database/users/users.service";

SERVICE.register("users", usersService);