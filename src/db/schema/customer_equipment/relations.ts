import { relations } from "drizzle-orm";
import { customerEquipment } from "./table";
import { users } from "../users";
import { networkEquipment } from "../network_equipment";

export const customerEquipmentRelations = relations(customerEquipment, ({ one }) => ({
  user: one(users, {
    fields: [customerEquipment.userId],
    references: [users.id],
  }),
  networkEquipment: one(networkEquipment, {
    fields: [customerEquipment.equipmentId],
    references: [networkEquipment.id],
  }),
}));