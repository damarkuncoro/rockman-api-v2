import SERVICE from "@/core/core.service.registry";
import { userIdentitiesService } from "@/v2/services/database/user_identities/user_identities.service";

SERVICE.register("userIdentities", userIdentitiesService);