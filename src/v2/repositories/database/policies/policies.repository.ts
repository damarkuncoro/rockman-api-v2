import { Repository } from "../../../../core/core.repository";
import { policies } from "../../../../db/schema/policies/table";

export class PoliciesRepository extends Repository<typeof policies> {
  constructor() {
    super(policies);
  }
}
