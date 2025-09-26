import { Repository } from "../../../../core/core.repository";
import { networkEquipment } from "../../../../db/schema/network_equipment/table";

class NetworkEquipmentRepository extends Repository<typeof networkEquipment> {
  constructor() {
    super(networkEquipment);
  }
}

export const networkEquipmentRepository = new NetworkEquipmentRepository();