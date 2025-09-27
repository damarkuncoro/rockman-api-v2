import { IService } from "@/core/core.interface";
import { Service } from "../../../../core/core.service";
import { outages } from "../../../../db/schema/outages/table";
import { outagesRepository } from "../../../repositories/database/outages/outages.repository";

class OutagesService extends Service<typeof outages> {
  constructor() {
    super(outagesRepository);
  }
}

export const outagesService: IService<typeof outages> = new OutagesService();