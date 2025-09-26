import { pgTable, integer, varchar, text, boolean, timestamp, foreignKey, uuid } from "drizzle-orm/pg-core";
import { users } from "../users";

export const userAddresses = pgTable("user_addresses", {
	id: uuid("id").primaryKey().defaultRandom(),
	userId: uuid("user_id").notNull(),
	label: varchar("label", { length: 100 }).notNull(),
	recipientName: varchar("recipient_name", { length: 100 }).notNull(),
	phoneNumber: varchar("phone_number", { length: 20 }).notNull(),
	addressLine1: text("address_line_1").notNull(),
	addressLine2: text("address_line_2"),
	city: varchar("city", { length: 100 }).notNull(),
	province: varchar("province", { length: 100 }).notNull(),
	postalCode: varchar("postal_code", { length: 10 }).notNull(),
	country: varchar("country", { length: 100 }).default('Indonesia').notNull(),
	isDefault: boolean("is_default").default(false).notNull(),
	isActive: boolean("is_active").default(true).notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
}, (table) => ({
	userIdFk: foreignKey({
		columns: [table.userId],
		foreignColumns: [users.id],
		name: "user_addresses_user_id_users_id_fk"
	}).onDelete("cascade"),
}));