import { IService } from "@/core/core.interface";
import { Service } from "@/core/core.service";
import { userProducts } from "@/db/schema/user_products/table";
import { userProductsRepository } from "@/v2/repositories/database/user_products";

class UserProductsService extends Service<typeof userProducts> {
  constructor() {
    super(userProductsRepository);
  }
}

export const userProductsService: IService<typeof userProducts> = new UserProductsService();