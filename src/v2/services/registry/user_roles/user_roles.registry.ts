import SERVICE from "../../../../core/core.service.registry";
import { userRolesService } from "../../database/user_roles/user_roles.service";

SERVICE.register("userRoles", userRolesService);