import { IService } from "@/core/core.interface";
import { Service } from "../../../../core/core.service";
import { tickets } from "../../../../db/schema/tickets/table";
import { ticketsRepository } from "../../../repositories/database/tickets/tickets.repository";

class TicketsService extends Service<typeof tickets> {
  constructor() {
    super(ticketsRepository);
  }
}

export const ticketsService: IService<typeof tickets> = new TicketsService();