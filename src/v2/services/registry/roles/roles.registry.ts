import SERVICE from "../../../../core/core.service.registry";
import { rolesService } from "../../database/roles/roles.service";

SERVICE.register("roles", rolesService);