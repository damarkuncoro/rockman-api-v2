import { pgTable, uuid, timestamp } from "drizzle-orm/pg-core";
import { users } from "../users";
import { networkEquipment } from "../network_equipment";

export const customerEquipment = pgTable("customer_equipment", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  equipmentId: uuid("equipment_id").notNull().references(() => networkEquipment.id, { onDelete: "cascade" }),
  assignedAt: timestamp("assigned_at", { withTimezone: true }).notNull().defaultNow(),
  returnedAt: timestamp("returned_at", { withTimezone: true }),
});