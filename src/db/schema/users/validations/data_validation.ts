import { z } from "zod";
export const nameSchema = z.string().min(3, "Nama minimal 3 karakter").max(255, "Nama maksimal 255 karakter");
export const emailSchema = z.string().email("Email tidak valid");
export const passwordSchema = z.string().min(8, "Password minimal 8 karakter");
