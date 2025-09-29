import { Repository } from "@/core/core.repository";
import { customers } from "@/db/schema";

export class CustomersRepository extends Repository<typeof customers> {
  constructor() {
    super(customers);
  }
}

