import { Service } from "../../../../core/core.service";
import { routeFeatures } from "../../../../db/schema/route_features/table";
import { routeFeaturesRepository } from "../../../repositories/database/route_features/route_features.repository";

class RouteFeaturesService extends Service<typeof routeFeatures> {
  constructor() {
    super(routeFeaturesRepository);
  }
}

export const routeFeaturesService = new RouteFeaturesService();