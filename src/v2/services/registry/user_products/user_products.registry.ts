import SERVICE from "../../../../core/core.service.registry";
import { userProductsService } from "../../database/user_products/user_products.service";

SERVICE.register("userProducts", userProductsService);