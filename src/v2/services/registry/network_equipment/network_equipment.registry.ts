import SERVICE from "../../../../core/core.service.registry";
import { networkEquipmentService } from "../../database/network_equipment/network_equipment.service";

SERVICE.register("networkEquipment", networkEquipmentService);