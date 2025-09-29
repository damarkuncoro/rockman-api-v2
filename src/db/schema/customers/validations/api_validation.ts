import { z } from "zod";
export const customerApiSchema = z.object({
  userId: z.string().uuid().optional(),
  customerType: z.string().optional(),
  customerTier: z.string().optional(),
  customerSince: z.string().pipe(z.coerce.date()).optional(),
  customerStatus: z.enum(["Active", "Inactive", "Suspended"]).optional(),
  customerSegment: z.string().optional(),
});