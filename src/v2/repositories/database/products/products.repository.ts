import { Repository } from "../../../../core/core.repository";
import { products } from "../../../../db/schema/products/table";

class ProductsRepository extends Repository<typeof products> {
  constructor() {
    super(products);
  }
}

export const productsRepository = new ProductsRepository();