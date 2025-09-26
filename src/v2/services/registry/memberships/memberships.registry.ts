import SERVICE from "../../../../core/core.service.registry";
import { membershipsService } from "../../database/memberships/memberships.service";

SERVICE.register("memberships", membershipsService);