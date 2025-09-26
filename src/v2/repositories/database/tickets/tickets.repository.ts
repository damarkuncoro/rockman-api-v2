import { Repository } from "../../../../core/core.repository";
import { tickets } from "../../../../db/schema/tickets/table";

class TicketsRepository extends Repository<typeof tickets> {
  constructor() {
    super(tickets);
  }
}

export const ticketsRepository = new TicketsRepository();