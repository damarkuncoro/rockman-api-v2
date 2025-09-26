import { relations } from "drizzle-orm";
import { networkEquipment } from "./table";
import { customerEquipment } from "../customer_equipment";

export const networkEquipmentRelations = relations(networkEquipment, ({ many }) => ({
  customerEquipment: many(customerEquipment),
}));