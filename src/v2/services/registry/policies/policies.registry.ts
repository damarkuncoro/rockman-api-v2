import SERVICE from "@/core/core.service.registry";
import { policiesService } from "@/v2/services/database/policies";

SERVICE.register("policies", policiesService);