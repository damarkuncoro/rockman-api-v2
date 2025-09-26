import { Repository } from "../../../../core/core.repository";
import { ticketReplies } from "../../../../db/schema/ticket_replies/table";

class TicketRepliesRepository extends Repository<typeof ticketReplies> {
  constructor() {
    super(ticketReplies);
  }
}

export const ticketRepliesRepository = new TicketRepliesRepository();