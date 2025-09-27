import { Service } from "@/core/core.service";
import { taxes } from "@/db/schema/billing/taxes";
import { TaxRepository } from "@/v2/repositories/database/taxes";

export class TaxService extends Service<typeof taxes> {
  constructor() {
    super(new TaxRepository());
  }
}