import { Service } from "../../../../core/core.service";
import { memberships } from "../../../../db/schema/memberships/table";
import { membershipsRepository } from "../../../repositories/database/memberships/memberships.repository";

class MembershipsService extends Service<typeof memberships> {
  constructor() {
    super(membershipsRepository);
  }
}

export const membershipsService = new MembershipsService();