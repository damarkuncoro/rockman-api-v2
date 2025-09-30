import { Service } from '@/core/core.service';
import { UserProductsRepository } from '@/v2/repositories/database/user_products';
import { userProducts } from '@/db/schema';

export const userProductsService = new Service(UserProductsRepository, userProducts, { enableLogging: true })