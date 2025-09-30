import { Repository } from "../../../../core/core.repository";
import { roles } from "../../../../db/schema/roles/table";

export class RolesRepository extends Repository<typeof roles> {
  constructor() {
    super(roles);
  }
}
