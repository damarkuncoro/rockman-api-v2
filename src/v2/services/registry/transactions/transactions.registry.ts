import SERVICE from "@/core/core.service.registry";
import { transactionsService } from "@/v2/services/database/transactions/transactions.service";

SERVICE.register("transactions", transactionsService);