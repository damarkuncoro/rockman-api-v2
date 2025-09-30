import { Service } from '@/core/core.service';
import { MembershipsRepository } from '@/v2/repositories/database/memberships';
import { memberships } from '@/db/schema';

export const membershipsService = new Service(MembershipsRepository, memberships, { enableLogging: true })