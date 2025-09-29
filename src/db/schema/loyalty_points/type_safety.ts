import { loyaltyPoints } from "./table";
import { InferSelectModel, InferInsertModel } from "drizzle-orm";

export type SelectLoyaltyPoint = InferSelectModel<typeof loyaltyPoints>;
export type InsertLoyaltyPoint = InferInsertModel<typeof loyaltyPoints>;