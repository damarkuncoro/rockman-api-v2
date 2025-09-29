import { pgTable, integer, varchar, text, boolean, timestamp, uuid } from "drizzle-orm/pg-core";
import { departments } from "../departments";

/**
 * Tabel users untuk menyimpan data pengguna sistem
 * Menggunakan foreign key ke tabel departments untuk normalisasi yang lebih baik
 */
export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  username: varchar("username", { length: 50 }).notNull().unique(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  active: boolean("active").default(true),
  rolesUpdatedAt: timestamp("roles_updated_at", { withTimezone: true }),
  // ABAC attributes untuk attribute-based access control
  departmentId: uuid("department_id").references(() => departments.id), // Foreign key ke tabel departments
  region: varchar("region", { length: 100 }),
  level: integer("level"), // seniority/grade level
  
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  deletedAt: timestamp("deleted_at", { withTimezone: true }),
});