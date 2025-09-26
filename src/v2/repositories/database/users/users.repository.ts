import { eq } from "drizzle-orm";
import { Repository } from "../../../../core/core.repository";
import db from "../../../../db";
import { users } from "../../../../db/schema/users/table";

class UsersRepository extends Repository<typeof users> {
  constructor() {
    super(users);
  }

  async findByEmail(email: string) {
    const result = await db.select().from(users).where(eq(users.email, email));
    return result[0] || null;
  }
}

export const usersRepository = new UsersRepository();