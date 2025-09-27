import { Service as CoreService } from '../../../../core/core.service';
import { IService } from '@/core/core.interface';
import { users } from '../../../../db/schema';
import { usersRepository } from '../../../repositories/database/users/users.repository';

class UsersService extends CoreService<typeof users> {
  constructor() {
    super(usersRepository);
  }

  async createUser(userData: typeof users.$inferInsert) {
    // Business logic for creating a user will go here
    // For now, just a placeholder
    console.log('Creating user with data:', userData);
    return { ...userData, id: 'new-user-id' };
  }

  async getUsers() {
    // Business logic for fetching users will go here
    // For now, just a placeholder
    console.log('Fetching all users');
    return [];
  }
}

export const userService: IService<typeof users> = new UsersService();