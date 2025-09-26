import { Repository } from "../../../../core/core.repository";
import { loyaltyPoints } from "../../../../db/schema/loyalty_points/table";

class LoyaltyPointsRepository extends Repository<typeof loyaltyPoints> {
  constructor() {
    super(loyaltyPoints);
  }
}

export const loyaltyPointsRepository = new LoyaltyPointsRepository();