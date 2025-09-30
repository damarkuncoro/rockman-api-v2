import { Repository } from "../../../../core/core.repository";
import { transactions } from "../../../../db/schema/transactions/table";

export class TransactionsRepository extends Repository<typeof transactions> {
  constructor() {
    super(transactions);
  }
}
