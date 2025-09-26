import { z } from "zod";
import { stringIdSchema } from "../../_common/schemas";

export const userProductApiSchema = z.object({
  userId: stringIdSchema,
  productId: stringIdSchema,
});