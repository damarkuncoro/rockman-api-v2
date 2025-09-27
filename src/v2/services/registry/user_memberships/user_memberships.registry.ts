import SERVICE from "@/core/core.service.registry";
import { userMembershipsService } from "@/v2/services/database/user_memberships/user_memberships.service";

SERVICE.register("userMemberships", userMembershipsService);