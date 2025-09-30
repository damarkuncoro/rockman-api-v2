import { Repository } from "../../../../core/core.repository";
import { features } from "../../../../db/schema/features/table";

export class FeaturesRepository extends Repository<typeof features> {
  constructor() {
    super(features);
  }
}
