import { Service } from "../../../../core/core.service";
import { departments } from "../../../../db/schema/departments/table";
import { departmentsRepository } from "../../../repositories/database/departments/departments.repository";

class DepartmentsService extends Service<typeof departments> {
  constructor() {
    super(departmentsRepository);
  }
}

export const departmentsService = new DepartmentsService();