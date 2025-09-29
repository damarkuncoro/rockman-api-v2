import { Repository } from "@/core/core.repository";
import { customerEquipment } from "@/db/schema/customer_equipment/table";

class CustomerEquipmentRepository extends Repository<typeof customerEquipment> {
  constructor() {
    super(customerEquipment);
  }
}

export const customerEquipmentRepository = new CustomerEquipmentRepository();