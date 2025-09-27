import { IService } from "@/core/core.interface";
import { Service } from "@/core/core.service";
import { discounts } from "@/db/schema/billing/discounts";
import { DiscountRepository } from "@/v2/repositories/database/discounts";

class DiscountService extends Service<typeof discounts> {
  constructor() {
    super(new DiscountRepository());
  }
}

export const discountService: IService<typeof discounts> =
  new DiscountService();