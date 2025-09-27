import SERVICE from "@/core/core.service.registry";
import { userService } from "@/v2/services/database/users/users.service";

SERVICE.register("users", userService);