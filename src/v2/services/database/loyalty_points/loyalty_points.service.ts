import { IService } from "@/core/core.interface";
import { Service } from "../../../../core/core.service";
import { loyaltyPoints } from "../../../../db/schema/loyalty_points/table";
import { loyaltyPointsRepository } from "../../../repositories/database/loyalty_points/loyalty_points.repository";

class LoyaltyPointsService extends Service<typeof loyaltyPoints> {
  constructor() {
    super(loyaltyPointsRepository);
  }
}

export const loyaltyPointsService: IService<typeof loyaltyPoints> = new LoyaltyPointsService();