import { SERVICE } from "@/core/core.service.registry";
import { subscriptionService } from "@/v2/services/database/subscriptions";

SERVICE.register("subscriptions", subscriptionService);