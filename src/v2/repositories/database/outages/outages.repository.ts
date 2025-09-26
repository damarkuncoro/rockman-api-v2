import { Repository } from "../../../../core/core.repository";
import { outages } from "../../../../db/schema/outages/table";

class OutagesRepository extends Repository<typeof outages> {
  constructor() {
    super(outages);
  }
}

export const outagesRepository = new OutagesRepository();