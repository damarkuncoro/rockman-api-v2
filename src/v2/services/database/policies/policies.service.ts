import { Service } from '@/core/core.service';
import { PoliciesRepository } from '@/v2/repositories/database/policies';
import { policies } from '@/db/schema';

export const policiesService = new Service(PoliciesRepository, policies, { enableLogging: true })