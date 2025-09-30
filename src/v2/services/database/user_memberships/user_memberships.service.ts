import { Service } from '@/core/core.service';
import { UserMembershipsRepository } from '@/v2/repositories/database/user_memberships';
import { userMemberships } from '@/db/schema';

export const userMembershipsService = new Service(UserMembershipsRepository, userMemberships, { enableLogging: true })