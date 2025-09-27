import SERVICE from "@/core/core.service.registry";
import { rolesService } from "@/v2/services/database/roles";

SERVICE.register("roles", rolesService);