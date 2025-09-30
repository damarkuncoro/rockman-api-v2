import { pgTable, varchar, boolean, timestamp, uuid, jsonb } from "drizzle-orm/pg-core";
import { users } from "../users";

/**
 * Tabel user_settings untuk menyimpan pengaturan pengguna
 * Menggunakan foreign key ke tabel users untuk relasi one-to-one
 */
export const userSettings = pgTable("user_settings", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").notNull().references(() => users.id).unique(), // Foreign key ke tabel users dengan unique constraint untuk one-to-one
  
  // Pengaturan bahasa
  language: varchar("language", { length: 10 }).default("id-ID"),
  
  // Pengaturan tema
  theme: varchar("theme", { length: 20 }).default("light"),
  
  // Pengaturan notifikasi
  emailNotifications: boolean("email_notifications").default(true),
  pushNotifications: boolean("push_notifications").default(true),
  smsNotifications: boolean("sms_notifications").default(false),
  
  // Pengaturan privasi
  dataSharing: boolean("data_sharing").default(true),
  activityTracking: boolean("activity_tracking").default(true),
  
  // Pengaturan tambahan dalam format JSON
  additionalSettings: jsonb("additional_settings"),
  
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  deletedAt: timestamp("deleted_at", { withTimezone: true }),
});