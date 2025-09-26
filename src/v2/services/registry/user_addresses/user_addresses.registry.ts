import SERVICE from "../../../../core/core.service.registry";
import { userAddressesService } from "../../database/user_addresses/user_addresses.service";

SERVICE.register("userAddresses", userAddressesService);