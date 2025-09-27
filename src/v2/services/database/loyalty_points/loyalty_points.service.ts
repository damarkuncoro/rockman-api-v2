import { IService } from "@/core/core.interface";
import { Service } from "@/core/core.service";
import { loyaltyPoints } from "@/db/schema/loyalty_points/table";
import { loyaltyPointsRepository } from "@/v2/repositories/database/loyalty_points";

class LoyaltyPointsService extends Service<typeof loyaltyPoints> {
  constructor() {
    super(loyaltyPointsRepository);
  }
}

export const loyaltyPointsService: IService<typeof loyaltyPoints> = new LoyaltyPointsService();