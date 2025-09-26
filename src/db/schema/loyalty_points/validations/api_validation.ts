import { z } from "zod";
import { stringIdSchema } from "../../_common/schemas";

export const loyaltyPointsApiSchema = z.object({
  userId: stringIdSchema,
  points: z.number(),
});