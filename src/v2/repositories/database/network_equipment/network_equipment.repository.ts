import { Repository } from "../../../../core/core.repository";
import { networkEquipment } from "../../../../db/schema/network_equipment/table";

export class NetworkEquipmentRepository extends Repository<typeof networkEquipment> {
  constructor() {
    super(networkEquipment);
  }
}
