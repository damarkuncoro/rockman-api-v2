import { Service } from '@/core/core.service';
import { ProductsRepository } from '@/v2/repositories/database/products';
import { products } from '@/db/schema';

export const productsService = new Service(ProductsRepository, products, { enableLogging: true })