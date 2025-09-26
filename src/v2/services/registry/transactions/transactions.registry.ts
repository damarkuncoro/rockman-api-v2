import SERVICE from "../../../../core/core.service.registry";
import { transactionsService } from "../../database/transactions/transactions.service";

SERVICE.register("transactions", transactionsService);