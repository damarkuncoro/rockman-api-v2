import SERVICE from "../../../../core/core.service.registry";
import { userPhonesService } from "../../database/user_phones/user_phones.service";

SERVICE.register("userPhones", userPhonesService);