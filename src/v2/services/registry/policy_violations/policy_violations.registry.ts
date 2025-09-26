import SERVICE from "../../../../core/core.service.registry";
import { policyViolationsService } from "../../database/policy_violations/policy_violations.service";

SERVICE.register("policyViolations", policyViolationsService);