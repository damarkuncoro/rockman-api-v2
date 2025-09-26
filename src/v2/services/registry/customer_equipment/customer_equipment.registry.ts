import SERVICE from "../../../../core/core.service.registry";
import { customerEquipmentService } from "../../database/customer_equipment/customer_equipment.service";

SERVICE.register("customerEquipment", customerEquipmentService);