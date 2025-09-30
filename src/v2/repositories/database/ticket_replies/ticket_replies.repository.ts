import { Repository } from "../../../../core/core.repository";
import { ticketReplies } from "../../../../db/schema/ticket_replies/table";

export class TicketRepliesRepository extends Repository<typeof ticketReplies> {
  constructor() {
    super(ticketReplies);
  }
}
