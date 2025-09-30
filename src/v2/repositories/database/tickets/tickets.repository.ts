import { Repository } from "../../../../core/core.repository";
import { tickets } from "../../../../db/schema/tickets/table";

export class TicketsRepository extends Repository<typeof tickets> {
  constructor() {
    super(tickets);
  }
}
