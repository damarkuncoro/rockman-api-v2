import { Service } from '@/core/core.service';
import { RolesRepository } from '@/v2/repositories/database/roles';
import { roles } from '@/db/schema';

export const rolesService = new Service(RolesRepository, roles, { enableLogging: true })