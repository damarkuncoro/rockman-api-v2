import SERVICE from "@/core/core.service.registry";
import { userAddressesService } from "@/v2/services/database/user_addresses/user_addresses.service";

SERVICE.register("userAddresses", userAddressesService);