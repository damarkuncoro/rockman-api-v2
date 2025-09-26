import { relations } from "drizzle-orm";
import { loyaltyPoints } from "./table";
import { users } from "../users";

export const loyaltyPointsRelations = relations(loyaltyPoints, ({ one }) => ({
  user: one(users, {
    fields: [loyaltyPoints.userId],
    references: [users.id],
  }),
}));