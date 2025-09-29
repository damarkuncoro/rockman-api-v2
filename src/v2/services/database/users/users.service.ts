import { Service } from '@/core/core.service';
import { UsersRepository } from '@/v2/repositories/database/users';
import { users } from '@/db/schema';

export const usersService = new Service(UsersRepository, users, { enableLogging: true })
