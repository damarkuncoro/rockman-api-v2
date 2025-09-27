import { IService } from "@/core/core.interface";
import { Service } from "@/core/core.service";
import { ticketReplies } from "@/db/schema/ticket_replies/table";
import { ticketRepliesRepository } from "@/v2/repositories/database/ticket_replies";

class TicketRepliesService extends Service<typeof ticketReplies> {
  constructor() {
    super(ticketRepliesRepository);
  }
}

export const ticketRepliesService: IService<typeof ticketReplies> = new TicketRepliesService();