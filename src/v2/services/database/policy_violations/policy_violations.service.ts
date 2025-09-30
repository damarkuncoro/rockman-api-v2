import { Service } from '@/core/core.service';
import { PolicyViolationsRepository } from '@/v2/repositories/database/policy_violations';
import { policyViolations } from '@/db/schema';

export const policyViolationsService = new Service(PolicyViolationsRepository, policyViolations, { enableLogging: true })