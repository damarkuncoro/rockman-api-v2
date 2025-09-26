import { Service } from "../../../../core/core.service";
import { userProducts } from "../../../../db/schema/user_products/table";
import { userProductsRepository } from "../../../repositories/database/user_products/user_products.repository";

class UserProductsService extends Service<typeof userProducts> {
  constructor() {
    super(userProductsRepository);
  }
}

export const userProductsService = new UserProductsService();