import { pgTable, varchar, text, boolean, timestamp, foreignKey, uuid } from "drizzle-orm/pg-core";
import { users } from "../users";

export const userDevices = pgTable("user_devices", {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id").notNull(),
    deviceId: varchar("device_id").notNull().unique(),
    deviceType: varchar("device_type", { length: 50 }).notNull(),
    deviceToken: text("device_token").notNull(),
    isActive: boolean("is_active").default(true).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
}, (table) => ({
    userIdFk: foreignKey({
        columns: [table.userId],
        foreignColumns: [users.id],
        name: "user_devices_user_id_users_id_fk"
    }).onDelete("cascade"),
}));