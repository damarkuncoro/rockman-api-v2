import SERVICE from "@/core/core.service.registry";
import { policyViolationsService } from "@/v2/services/database/policy_violations";

SERVICE.register("policyViolations", policyViolationsService);