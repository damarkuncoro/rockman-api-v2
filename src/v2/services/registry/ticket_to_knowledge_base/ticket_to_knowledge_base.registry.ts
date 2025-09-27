import SERVICE from "@/core/core.service.registry";
import { ticketToKnowledgeBaseService } from "@/v2/services/database/ticket_to_knowledge_base/ticket_to_knowledge_base.service";

SERVICE.register("ticketToKnowledgeBase", ticketToKnowledgeBaseService);