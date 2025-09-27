import { IService } from "@/core/core.interface";
import { Service } from "@/core/core.service";
import { departments } from "@/db/schema/departments/table";
import { departmentsRepository } from "@/v2/repositories/database/departments";

class DepartmentsService extends Service<typeof departments> {
  constructor() {
    super(departmentsRepository);
  }
}

export const departmentsService: IService<typeof departments> = new DepartmentsService();