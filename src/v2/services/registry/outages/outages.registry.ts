import SERVICE from "@/core/core.service.registry";
import { outagesService } from "@/v2/services/database/outages";

SERVICE.register("outages", outagesService);