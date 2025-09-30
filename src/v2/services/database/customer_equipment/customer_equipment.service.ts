import { Service } from '@/core/core.service';
import { CustomerEquipmentRepository } from '@/v2/repositories/database/customer_equipment';
import { customerEquipment } from '@/db/schema';

export const customerEquipmentService = new Service(CustomerEquipmentRepository, customerEquipment, { enableLogging: true })