import { z } from "zod";

export const productApiSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  price: z.number(),
});