import { z } from "zod";
import { stringIdSchema } from "../../_common/schemas";

export const productSchema = z.object({
  id: stringIdSchema,
  name: z.string(),
  description: z.string().optional(),
  price: z.number(),
});

export const newProductSchema = productSchema.omit({ id: true });