import { z } from "zod";
import { stringIdSchema } from "../../_common/schemas";

export const userDeviceSchema = z.object({
    userId: stringIdSchema,
    deviceId: stringIdSchema,
    deviceType: z.string(),
    deviceToken: z.string(),
    isActive: z.boolean(),
});

export const newUserDeviceSchema = userDeviceSchema;