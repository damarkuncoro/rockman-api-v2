import { Repository } from "../../../../core/core.repository";
import { ticketToKnowledgeBase } from "../../../../db/schema/ticket_to_knowledge_base/table";

class TicketToKnowledgeBaseRepository extends Repository<typeof ticketToKnowledgeBase> {
  constructor() {
    super(ticketToKnowledgeBase);
  }
}

export const ticketToKnowledgeBaseRepository = new TicketToKnowledgeBaseRepository();