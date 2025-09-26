import { z } from "zod";

export const membershipApiSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  minPoints: z.number(),
  discountPercentage: z.number().optional(),
});