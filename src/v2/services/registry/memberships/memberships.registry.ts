import SERVICE from "@/core/core.service.registry";
import { membershipsService } from "@/v2/services/database/memberships";

SERVICE.register("memberships", membershipsService);