import { features } from "./table";
import { InferSelectModel, InferInsertModel } from "drizzle-orm";

export type SelectFeature = InferSelectModel<typeof features>;
export type InsertFeature = InferInsertModel<typeof features>;