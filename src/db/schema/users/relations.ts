import { relations } from "drizzle-orm";
import { users } from "./table";
import { userSessions } from "../user_sessions";
import { departments } from "../departments";
import { userAddresses } from "../user_addresses";
import { userProducts } from "../user_products";
import { tickets } from "../tickets";
import { ticketReplies } from "../ticket_replies";
import { userMemberships } from "../user_memberships";
import { loyaltyPoints } from "../loyalty_points";
import { customerEquipment } from "../customer_equipment";

/**
 * Definisi relasi untuk tabel users
 * Menghubungkan dengan sessions, departments, dan user_addresses
 */
export const usersRelations = relations(users, ({ many, one }) => ({
  // One-to-many: satu user bisa memiliki banyak sessions

  // One-to-many: satu user bisa memiliki banyak alamat

  // Many-to-one: banyak user bisa berada di satu department
  department: one(departments, {
    fields: [users.departmentId],
    references: [departments.id],
  }),
}));