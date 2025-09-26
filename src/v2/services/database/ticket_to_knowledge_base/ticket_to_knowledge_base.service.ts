import { Service } from "../../../../core/core.service";
import { ticketToKnowledgeBase } from "../../../../db/schema/ticket_to_knowledge_base/table";
import { ticketToKnowledgeBaseRepository } from "../../../repositories/database/ticket_to_knowledge_base/ticket_to_knowledge_base.repository";

class TicketToKnowledgeBaseService extends Service<typeof ticketToKnowledgeBase> {
  constructor() {
    super(ticketToKnowledgeBaseRepository);
  }
}

export const ticketToKnowledgeBaseService = new TicketToKnowledgeBaseService();