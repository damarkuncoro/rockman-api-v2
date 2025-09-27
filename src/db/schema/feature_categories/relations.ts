import { relations } from "drizzle-orm";
import { featureCategories } from "./table";
import { features } from "../features/table";

/**
 * Relations untuk Feature Categories
 * 
 * Domain: RBAC - Feature Management
 * Responsibility: Mengelola relasi antar tabel untuk kategori fitur
 * 
 * Mengikuti prinsip:
 * - SRP: Hanya menangani relasi kategori fitur
 * - DRY: Reusable relations untuk query
 * - KISS: Relasi yang sederhana dan jelas
 * - SOLID: Separation of concerns untuk database relations
 */

/**
 * Relasi one-to-many: satu kategori memiliki banyak fitur
 * Digunakan untuk query kategori dengan fitur-fiturnya
 */
export const featureCategoriesRelations = relations(featureCategories, ({ many }) => ({
  features: many(features),
}));
