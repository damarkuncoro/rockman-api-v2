import { Repository } from "../../../../core/core.repository";
import { userProducts } from "../../../../db/schema/user_products/table";

class UserProductsRepository extends Repository<typeof userProducts> {
  constructor() {
    super(userProducts);
  }
}

export const userProductsRepository = new UserProductsRepository();