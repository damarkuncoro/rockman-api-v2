import { IService } from "@/core/core.interface";
import { Service } from "../../../../core/core.service";
import { products } from "../../../../db/schema/products/table";
import { productsRepository } from "../../../repositories/database/products/products.repository";

class ProductsService extends Service<typeof products> {
  constructor() {
    super(productsRepository);
  }
}

export const productsService: IService<typeof products> = new ProductsService();