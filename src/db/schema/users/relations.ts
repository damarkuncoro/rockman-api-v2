import { relations } from "drizzle-orm";
import { users } from "./table";
import { sessions } from "../sessions";
import { departments } from "../departments";
import { userAddresses } from "../user_addresses";
import { userProducts } from "../user_products";
import { tickets } from "../tickets";
import { ticketReplies } from "../ticket_replies";
import { userMemberships } from "../user_memberships";
import { loyaltyPoints } from "../loyalty_points";

/**
 * Definisi relasi untuk tabel users
 * Menghubungkan dengan sessions, departments, dan user_addresses
 */
export const usersRelations = relations(users, ({ many, one }) => ({
  // One-to-many: satu user bisa memiliki banyak sessions
  sessions: many(sessions),
  
  // One-to-many: satu user bisa memiliki banyak alamat
  addresses: many(userAddresses),

  // One-to-many: satu user bisa memiliki banyak produk
  products: many(userProducts),

  // One-to-many: satu user bisa memiliki banyak tiket
  tickets: many(tickets),

  // One-to-many: satu user bisa memiliki banyak balasan tiket
  ticketReplies: many(ticketReplies),

  // One-to-many: satu user bisa memiliki banyak keanggotaan
  memberships: many(userMemberships),

  // One-to-many: satu user bisa memiliki banyak poin loyalitas
  loyaltyPoints: many(loyaltyPoints),
  
  // Many-to-one: banyak user bisa berada di satu department
  department: one(departments, {
    fields: [users.departmentId],
    references: [departments.id],
  }),
}));