import { Repository } from "../../../../core/core.repository";
import { routeFeatures } from "../../../../db/schema/route_features/table";

export class RouteFeaturesRepository extends Repository<typeof routeFeatures> {
  constructor() {
    super(routeFeatures);
  }
}
