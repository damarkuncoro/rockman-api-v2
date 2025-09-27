import SERVICE from "@/core/core.service.registry";
import { productsService } from "@/v2/services/database/products";

SERVICE.register("products", productsService);