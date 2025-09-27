import { IService } from "@/core/core.interface";
import { Service } from "@/core/core.service";
import { tickets } from "@/db/schema/tickets/table";
import { ticketsRepository } from "@/v2/repositories/database/tickets";

class TicketsService extends Service<typeof tickets> {
  constructor() {
    super(ticketsRepository);
  }
}

export const ticketsService: IService<typeof tickets> = new TicketsService();