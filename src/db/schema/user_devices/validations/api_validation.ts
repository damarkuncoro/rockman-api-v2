import { z } from "zod";
import { stringIdSchema } from "../../_common/schemas";

export const userDeviceApiSchema = z.object({
    deviceId: stringIdSchema,
    deviceType: z.string(),
    deviceToken: z.string(),
});