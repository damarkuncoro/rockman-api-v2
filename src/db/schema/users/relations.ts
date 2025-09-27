import { relations } from "drizzle-orm";
import { users } from "./table";
import { departments } from "../departments";

import { userAddresses } from "../user_addresses";
import { userPhones } from "../user_phones";
import { userIdentities } from "../user_identities";
import { userRoles } from "../user_roles";
import { userMemberships } from "../user_memberships";

/**
* Definisi relasi untuk tabel users
* Menghubungkan dengan sessions, departments, dan user_addresses
*/
export const usersRelations = relations(users, ({ one, many }) => ({
 // Many-to-one: banyak user bisa berada di satu department
 department: one(departments, {
   fields: [users.departmentId],
   references: [departments.id],
 }),

 // One-to-many: satu user bisa memiliki banyak alamat
 addresses: many(userAddresses),

 // One-to-many: satu user bisa memiliki banyak nomor telepon
 phones: many(userPhones),

 // One-to-many: satu user bisa memiliki banyak identitas
 identities: many(userIdentities),

 // One-to-many: satu user bisa memiliki banyak peran
 roles: many(userRoles),

 // One-to-many: satu user bisa memiliki banyak keanggotaan
 memberships: many(userMemberships),
}));