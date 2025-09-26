import { Repository } from "../../../../core/core.repository";
import { policies } from "../../../../db/schema/policies/table";

class PoliciesRepository extends Repository<typeof policies> {
  constructor() {
    super(policies);
  }
}

export const policiesRepository = new PoliciesRepository();