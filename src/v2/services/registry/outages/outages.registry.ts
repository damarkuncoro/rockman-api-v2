import SERVICE from "../../../../core/core.service.registry";
import { outagesService } from "../../database/outages/outages.service";

SERVICE.register("outages", outagesService);