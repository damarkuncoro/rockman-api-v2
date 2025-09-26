import { Repository } from "../../../../core/core.repository";
import { routeFeatures } from "../../../../db/schema/route_features/table";

class RouteFeaturesRepository extends Repository<typeof routeFeatures> {
  constructor() {
    super(routeFeatures);
  }
}

export const routeFeaturesRepository = new RouteFeaturesRepository();