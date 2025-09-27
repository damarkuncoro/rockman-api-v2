import { IService } from "@/core/core.interface";
import { Service } from "@/core/core.service";
import { networkEquipment } from "@/db/schema/network_equipment/table";
import { networkEquipmentRepository } from "@/v2/repositories/database/network_equipment";

class NetworkEquipmentService extends Service<typeof networkEquipment> {
  constructor() {
    super(networkEquipmentRepository);
  }
}

export const networkEquipmentService: IService<typeof networkEquipment> =
  new NetworkEquipmentService();