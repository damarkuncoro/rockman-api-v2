import { Service } from '@/core/core.service';
import { UserRolesRepository } from '@/v2/repositories/database/user_roles';
import { userRoles } from '@/db/schema';

export const userRolesService = new Service(UserRolesRepository, userRoles, { enableLogging: true })