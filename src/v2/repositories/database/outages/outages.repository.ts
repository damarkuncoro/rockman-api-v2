import { Repository } from "../../../../core/core.repository";
import { outages } from "../../../../db/schema/outages/table";

export class OutagesRepository extends Repository<typeof outages> {
  constructor() {
    super(outages);
  }
}
