import { IService } from "@/core/core.interface";
import { Service } from "../../../../core/core.service";
import { users } from "../../../../db/schema/users/table";
import { usersRepository } from "../../../repositories/database/users/users.repository";

class UsersService extends Service<typeof users> {
  constructor() {
    super(usersRepository);
  }

  // You can add user-specific service methods here
  // For example:
  // async findUserByEmail(email: string) {
  //   const user = await (this.repository as typeof usersRepository).findByEmail(email);
  //   // add business logic here
  //   return user;
  // }
}

export const usersService: IService<typeof users> = new UsersService();