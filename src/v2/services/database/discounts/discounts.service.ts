import { Service } from "@/core/core.service";
import { discounts } from "@/db/schema/billing/discounts";
import { DiscountRepository } from "@/v2/repositories/database/discounts";

export class DiscountService extends Service<typeof discounts> {
  constructor() {
    super(new DiscountRepository());
  }
}