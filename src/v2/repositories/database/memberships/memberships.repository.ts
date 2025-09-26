import { Repository } from "../../../../core/core.repository";
import { memberships } from "../../../../db/schema/memberships/table";

class MembershipsRepository extends Repository<typeof memberships> {
  constructor() {
    super(memberships);
  }
}

export const membershipsRepository = new MembershipsRepository();