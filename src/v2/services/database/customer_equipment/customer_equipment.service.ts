import { IService } from "@/core/core.interface";
import { Service } from "@/core/core.service";
import { customerEquipment } from "@/db/schema/customer_equipment/table";
import { customerEquipmentRepository } from "@/v2/repositories/database/customer_equipment";

class CustomerEquipmentService extends Service<typeof customerEquipment> {
  constructor() {
    super(customerEquipmentRepository);
  }
}

export const customerEquipmentService: IService<typeof customerEquipment> = new CustomerEquipmentService();