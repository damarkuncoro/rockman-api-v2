import { IService } from "@/core/core.interface";
import { Service } from "../../../../core/core.service";
import { ticketReplies } from "../../../../db/schema/ticket_replies/table";
import { ticketRepliesRepository } from "../../../repositories/database/ticket_replies/ticket_replies.repository";

class TicketRepliesService extends Service<typeof ticketReplies> {
  constructor() {
    super(ticketRepliesRepository);
  }
}

export const ticketRepliesService: IService<typeof ticketReplies> = new TicketRepliesService();