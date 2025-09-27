import { userSessions } from "./table";

/**
 * TypeScript types untuk sessions
 *
 * Domain: Authentication
 * Responsibility: Menyediakan type safety untuk sessions
 */

/**
 * Type untuk select session data
 */
export type Session = typeof userSessions.$inferSelect;

/**
 * Type untuk insert session data
 */
export type NewSession = typeof userSessions.$inferInsert;