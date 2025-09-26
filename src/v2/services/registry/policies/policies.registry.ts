import SERVICE from "../../../../core/core.service.registry";
import { policiesService } from "../../database/policies/policies.service";

SERVICE.register("policies", policiesService);