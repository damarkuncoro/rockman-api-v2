import { Repository } from "../../../../core/core.repository";
import { departments } from "../../../../db/schema/departments/table";

class DepartmentsRepository extends Repository<typeof departments> {
  constructor() {
    super(departments);
  }
}

export const departmentsRepository = new DepartmentsRepository();