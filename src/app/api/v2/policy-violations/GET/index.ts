import { API } from '@/v2/utils/api-handler';
import { policyViolationsService } from '@/v2/services/database/policy_violations';

export const GET = API.GET.All(policyViolationsService.GET.All, 'PolicyViolations');


