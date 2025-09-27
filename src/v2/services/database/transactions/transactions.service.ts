import { IService } from "@/core/core.interface";
import { Service } from "../../../../core/core.service";
import { transactions } from "../../../../db/schema/transactions/table";
import { transactionsRepository } from "../../../repositories/database/transactions/transactions.repository";

class TransactionsService extends Service<typeof transactions> {
  constructor() {
    super(transactionsRepository);
  }
}

export const transactionsService: IService<typeof transactions> = new TransactionsService();