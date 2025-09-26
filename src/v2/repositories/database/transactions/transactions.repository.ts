import { Repository } from "../../../../core/core.repository";
import { transactions } from "../../../../db/schema/transactions/table";

class TransactionsRepository extends Repository<typeof transactions> {
  constructor() {
    super(transactions);
  }
}

export const transactionsRepository = new TransactionsRepository();