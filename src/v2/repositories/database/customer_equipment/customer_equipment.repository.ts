import { Repository } from "@/core/core.repository";
import { customerEquipment } from "@/db/schema/customer_equipment/table";

export class CustomerEquipmentRepository extends Repository<typeof customerEquipment> {
  constructor() {
    super(customerEquipment);
  }
}
