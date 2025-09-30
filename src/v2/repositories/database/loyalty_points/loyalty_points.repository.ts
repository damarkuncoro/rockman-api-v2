import { Repository } from "../../../../core/core.repository";
import { loyaltyPoints } from "../../../../db/schema/loyalty_points/table";

export class LoyaltyPointsRepository extends Repository<typeof loyaltyPoints> {
  constructor() {
    super(loyaltyPoints);
  }
}
