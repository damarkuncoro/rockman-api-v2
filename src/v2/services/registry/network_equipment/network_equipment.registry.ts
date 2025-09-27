import SERVICE from "@/core/core.service.registry";
import { networkEquipmentService } from "@/v2/services/database/network_equipment";

SERVICE.register("networkEquipment", networkEquipmentService);