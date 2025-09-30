import { Repository } from "../../../../core/core.repository";
import { products } from "../../../../db/schema/products/table";

export class ProductsRepository extends Repository<typeof products> {
  constructor() {
    super(products);
  }
}
