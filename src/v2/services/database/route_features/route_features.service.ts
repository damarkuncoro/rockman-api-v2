import { Service } from '@/core/core.service';
import { RouteFeaturesRepository } from '@/v2/repositories/database/route_features';
import { routeFeatures } from '@/db/schema';

export const routeFeaturesService = new Service(RouteFeaturesRepository, routeFeatures, { enableLogging: true })