import SERVICE from "@/core/core.service.registry";
import { customerEquipmentService } from "@/v2/services/database/customer_equipment";

SERVICE.register("customerEquipment", customerEquipmentService);