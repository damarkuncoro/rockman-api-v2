import { memberships } from "./table";
import { InferSelectModel, InferInsertModel } from "drizzle-orm";

export type SelectMembership = InferSelectModel<typeof memberships>;
export type InsertMembership = InferInsertModel<typeof memberships>;