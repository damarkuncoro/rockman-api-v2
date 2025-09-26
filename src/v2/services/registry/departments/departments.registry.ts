import SERVICE from "../../../../core/core.service.registry";
import { departmentsService } from "../../database/departments/departments.service";

SERVICE.register("departments", departmentsService);