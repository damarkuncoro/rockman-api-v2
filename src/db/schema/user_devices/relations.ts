import { relations } from "drizzle-orm";
import { userDevices } from "./table";
import { users } from "../users";

export const userDevicesRelations = relations(userDevices, ({ one }) => ({
    user: one(users, {
        fields: [userDevices.userId],
        references: [users.id],
    }),
}));