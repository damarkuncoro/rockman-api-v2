import { z } from "zod";

/**
 * Schema validasi untuk API user_settings
 */

// Schema untuk validasi saat pembuatan setting baru
export const createUserSettingsSchema = z.object({
  userId: z.string().uuid(),
  language: z.string().max(10, { message: "Bahasa tidak boleh lebih dari 10 karakter" }).optional(),
  theme: z.string().max(20, { message: "Tema tidak boleh lebih dari 20 karakter" }).optional(),
  emailNotifications: z.boolean().optional(),
  pushNotifications: z.boolean().optional(),
  smsNotifications: z.boolean().optional(),
  dataSharing: z.boolean().optional(),
  activityTracking: z.boolean().optional(),
  additionalSettings: z.record(z.string(), z.any()).optional(),
});

// Schema untuk validasi saat update setting
export const updateUserSettingsSchema = z.object({
  language: z.string().max(10, { message: "Bahasa tidak boleh lebih dari 10 karakter" }).optional(),
  theme: z.string().max(20, { message: "Tema tidak boleh lebih dari 20 karakter" }).optional(),
  emailNotifications: z.boolean().optional(),
  pushNotifications: z.boolean().optional(),
  smsNotifications: z.boolean().optional(),
  dataSharing: z.boolean().optional(),
  activityTracking: z.boolean().optional(),
  additionalSettings: z.record(z.string(), z.any()).optional(),
});