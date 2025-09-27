import { Repository } from "@/core/core.repository";
import { discounts } from "@/db/schema/billing/discounts";

export class DiscountRepository extends Repository<typeof discounts> {
  constructor() {
    super(discounts);
  }
}