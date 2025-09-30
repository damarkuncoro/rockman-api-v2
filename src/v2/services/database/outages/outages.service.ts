import { Service } from '@/core/core.service';
import { OutagesRepository } from '@/v2/repositories/database/outages';
import { outages } from '@/db/schema';

export const outagesService = new Service(OutagesRepository, outages, { enableLogging: true })