/**
 * Users Schema Module
 * 
 * Domain: User Management
 * Responsibility: Mengelola data pengguna dan atribut ABAC
 * 
 * Struktur modular dengan Separation of Concerns:
 * - table.ts: Database schema definition
 * - relations.ts: Database relations
 * - type_safety.ts: TypeScript types
 * - validations/data_validation.ts: Data layer validation
 * - validations/api_validation.ts: API layer validation
 */

// Database Schema
export * from "./table";
export * from "./relations";
export * from "./type_safety";
export * from "./validations";