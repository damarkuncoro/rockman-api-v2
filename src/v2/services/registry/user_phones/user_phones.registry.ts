import SERVICE from "@/core/core.service.registry";
import { userPhonesService } from "@/v2/services/database/user_phones/user_phones.service";

SERVICE.register("userPhones", userPhonesService);