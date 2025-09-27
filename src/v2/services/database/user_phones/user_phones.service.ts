import { IService } from "@/core/core.interface";
import { Service } from "../../../../core/core.service";
import { userPhones } from "../../../../db/schema/user_phones/table";
import { userPhonesRepository } from "../../../repositories/database/user_phones/user_phones.repository";

class UserPhonesService extends Service<typeof userPhones> {
  constructor() {
    super(userPhonesRepository);
  }
}

export const userPhonesService: IService<typeof userPhones> = new UserPhonesService();