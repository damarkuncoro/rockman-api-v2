import SERVICE from "@/core/core.service.registry";
import { ticketRepliesService } from "@/v2/services/database/ticket_replies/ticket_replies.service";

SERVICE.register("ticketReplies", ticketRepliesService);