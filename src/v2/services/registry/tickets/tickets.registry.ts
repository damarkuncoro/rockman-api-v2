import SERVICE from "@/core/core.service.registry";
import { ticketsService } from "@/v2/services/database/tickets/tickets.service";

SERVICE.register("tickets", ticketsService);