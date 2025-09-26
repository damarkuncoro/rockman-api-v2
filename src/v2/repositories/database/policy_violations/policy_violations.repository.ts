import { Repository } from "../../../../core/core.repository";
import { policyViolations } from "../../../../db/schema/policy_violations/table";

class PolicyViolationsRepository extends Repository<typeof policyViolations> {
  constructor() {
    super(policyViolations);
  }
}

export const policyViolationsRepository = new PolicyViolationsRepository();