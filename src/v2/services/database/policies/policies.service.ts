import { IService } from "@/core/core.interface";
import { Service } from "../../../../core/core.service";
import { policies } from "../../../../db/schema/policies/table";
import { policiesRepository } from "../../../repositories/database/policies/policies.repository";

class PoliciesService extends Service<typeof policies> {
  constructor() {
    super(policiesRepository);
  }
}

export const policiesService: IService<typeof policies> = new PoliciesService();