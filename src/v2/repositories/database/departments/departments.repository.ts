import { Repository } from "../../../../core/core.repository";
import { departments } from "../../../../db/schema/departments/table";

export class DepartmentsRepository extends Repository<typeof departments> {
  constructor() {
    super(departments);
  }
}
