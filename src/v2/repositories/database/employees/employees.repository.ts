import { Repository } from "../../../../core/core.repository";
import { employees } from "../../../../db/schema";

class EmployeesRepository extends Repository<typeof employees> {
  constructor() {
    super(employees);
  }
}

export const employeesRepository = new EmployeesRepository();