import { Service } from '@/core/core.service';
import { NetworkEquipmentRepository } from '@/v2/repositories/database/network_equipment';
import { networkEquipment } from '@/db/schema';

export const networkEquipmentService = new Service(NetworkEquipmentRepository, networkEquipment, { enableLogging: true })