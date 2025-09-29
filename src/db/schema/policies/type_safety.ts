import { policies } from "./table";
import { InferSelectModel, InferInsertModel } from "drizzle-orm";

export type SelectPolicy = InferSelectModel<typeof policies>;
export type InsertPolicy = InferInsertModel<typeof policies>;