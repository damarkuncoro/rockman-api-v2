import { Repository } from "@/core/core.repository";
import { users } from '@/db/schema';

export class UsersRepository extends Repository<typeof users> {
  constructor() {
    super(users);
  }
}
