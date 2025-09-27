import SERVICE from "@/core/core.service.registry";
import { departmentsService } from "@/v2/services/database/departments";

SERVICE.register("departments", departmentsService);