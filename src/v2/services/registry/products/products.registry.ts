import SERVICE from "../../../../core/core.service.registry";
import { productsService } from "../../database/products/products.service";

SERVICE.register("products", productsService);