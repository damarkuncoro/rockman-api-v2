import { Repository } from "../../../../core/core.repository";
import { ticketToKnowledgeBase } from "../../../../db/schema/ticket_to_knowledge_base/table";

export class TicketToKnowledgeBaseRepository extends Repository<typeof ticketToKnowledgeBase> {
  constructor() {
    super(ticketToKnowledgeBase);
  }
}
