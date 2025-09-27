import { pgTable, uuid, varchar, timestamp, pgEnum } from "drizzle-orm/pg-core";

export const equipmentTypeEnum = pgEnum("equipment_type", ["modem", "router", "switch"]);
export const equipmentStatusEnum = pgEnum("equipment_status", ["in_stock", "assigned", "faulty"]);

export const networkEquipment = pgTable("network_equipment", {
  id: uuid("id").primaryKey().defaultRandom(),
  serialNumber: varchar("serial_number", { length: 255 }).notNull().unique(),
  macAddress: varchar("mac_address", { length: 255 }).notNull().unique(),
  model: varchar("model", { length: 255 }),
  equipmentType: equipmentTypeEnum("equipment_type").notNull(),
  status: equipmentStatusEnum("status").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});