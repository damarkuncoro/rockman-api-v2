import { IService } from "@/core/core.interface";
import { Service } from "../../../../core/core.service";
import { customerEquipment } from "../../../../db/schema/customer_equipment/table";
import { customerEquipmentRepository } from "../../../repositories/database/customer_equipment/customer_equipment.repository";

class CustomerEquipmentService extends Service<typeof customerEquipment> {
  constructor() {
    super(customerEquipmentRepository);
  }
}

export const customerEquipmentService: IService<typeof customerEquipment> = new CustomerEquipmentService();