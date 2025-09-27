import { IService } from "@/core/core.interface";
import { Service } from "../../../../core/core.service";
import { policyViolations } from "../../../../db/schema/policy_violations/table";
import { policyViolationsRepository } from "../../../repositories/database/policy_violations/policy_violations.repository";

class PolicyViolationsService extends Service<typeof policyViolations> {
  constructor() {
    super(policyViolationsRepository);
  }
}

export const policyViolationsService: IService<typeof policyViolations> = new PolicyViolationsService();