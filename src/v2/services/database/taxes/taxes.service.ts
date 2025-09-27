import { Service } from "@/core/core.service";
import { IService } from "@/core/core.interface";
import { taxes } from "@/db/schema/billing/taxes";
import { TaxRepository } from "@/v2/repositories/database/taxes";

class TaxService extends Service<typeof taxes> {
  constructor() {
    super(new TaxRepository());
  }
}

export const taxService: IService<typeof taxes> = new TaxService();