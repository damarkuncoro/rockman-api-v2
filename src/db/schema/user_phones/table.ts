import { pgTable, integer, varchar, boolean, timestamp, foreignKey, uuid } from "drizzle-orm/pg-core";
import { users } from "../users";

export const userPhones = pgTable("user_phones", {
	id: uuid("id").primaryKey().defaultRandom(),
	userId: uuid("user_id").notNull(),
	label: varchar("label", { length: 50 }).notNull(),
	phoneNumber: varchar("phone_number", { length: 20 }).notNull(),
	countryCode: varchar("country_code", { length: 5 }).default('+62').notNull(),
	isDefault: boolean("is_default").default(false).notNull(),
	isActive: boolean("is_active").default(true).notNull(),
	isVerified: boolean("is_verified").default(false).notNull(),
	verifiedAt: timestamp("verified_at", { withTimezone: true, mode: 'string' }),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
}, (table) => ({
	userIdFk: foreignKey({
		columns: [table.userId],
		foreignColumns: [users.id],
		name: "user_phones_user_id_users_id_fk"
	}).onDelete("cascade"),
}));