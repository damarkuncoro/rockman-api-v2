import { IService } from "@/core/core.interface";
import { Service } from "@/core/core.service";
import { routeFeatures } from "@/db/schema/route_features/table";
import { routeFeaturesRepository } from "@/v2/repositories/database/route_features";

class RouteFeaturesService extends Service<typeof routeFeatures> {
  constructor() {
    super(routeFeaturesRepository);
  }
}

export const routeFeaturesService: IService<typeof routeFeatures> = new RouteFeaturesService();