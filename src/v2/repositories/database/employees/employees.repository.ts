import { Repository } from "../../../../core/core.repository";
import { employees } from "../../../../db/schema";

export class EmployeesRepository extends Repository<typeof employees> {
  constructor() {
    super(employees);
  }
}
