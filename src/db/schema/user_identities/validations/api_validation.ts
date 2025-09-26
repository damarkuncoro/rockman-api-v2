import { z } from "zod";
import { stringIdSchema } from "../../_common/schemas";

export const userIdentityApiSchema = z.object({
  userId: stringIdSchema,
  type: z.string(),
  number: z.string(),
});