import { Repository } from "../../../../core/core.repository";
import { memberships } from "../../../../db/schema/memberships/table";

export class MembershipsRepository extends Repository<typeof memberships> {
  constructor() {
    super(memberships);
  }
}
