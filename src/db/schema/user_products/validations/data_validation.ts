import { z } from "zod";
import { stringIdSchema } from "../../_common/schemas";

export const userProductSchema = z.object({
  id: stringIdSchema,
  userId: stringIdSchema,
  productId: stringIdSchema,
});

export const newUserProductSchema = userProductSchema.omit({ id: true });