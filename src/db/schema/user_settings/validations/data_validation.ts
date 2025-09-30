import { z } from "zod";

/**
 * Schema validasi untuk data user_settings
 */

// Validasi untuk tema yang didukung
export const themeSchema = z.enum(["light", "dark", "system"]);

// Validasi untuk bahasa yang didukung
export const languageSchema = z.enum(["id-ID", "en-US", "en-GB"]);

// Schema untuk validasi data user settings
export const userSettingsDataSchema = z.object({
  userId: z.string().uuid(),
  language: languageSchema.optional().default("id-ID"),
  theme: themeSchema.optional().default("light"),
  emailNotifications: z.boolean().optional().default(true),
  pushNotifications: z.boolean().optional().default(true),
  smsNotifications: z.boolean().optional().default(false),
  dataSharing: z.boolean().optional().default(true),
  activityTracking: z.boolean().optional().default(true),
  additionalSettings: z.record(z.string(), z.any()).optional(),
});