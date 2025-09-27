import SERVICE from "@/core/core.service.registry";
import { userRolesService } from "@/v2/services/database/user_roles/user_roles.service";

SERVICE.register("userRoles", userRolesService);