import SERVICE from "../../../../core/core.service.registry";
import { userIdentitiesService } from "../../database/user_identities/user_identities.service";

SERVICE.register("userIdentities", userIdentitiesService);