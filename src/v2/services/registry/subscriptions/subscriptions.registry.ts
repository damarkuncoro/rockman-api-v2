import { SERVICE } from "@/core/core.service.registry";
import { SubscriptionService } from "@/v2/services/database/subscriptions";

SERVICE.register("subscriptions", new SubscriptionService());