import SERVICE from "../../../../core/core.service.registry";
import { ticketsService } from "../../database/tickets/tickets.service";

SERVICE.register("tickets", ticketsService);