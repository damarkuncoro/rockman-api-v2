import { changeHistory } from "./table";
import { InferSelectModel, InferInsertModel } from "drizzle-orm";

export type SelectChangeHistory = InferSelectModel<typeof changeHistory>;
export type InsertChangeHistory = InferInsertModel<typeof changeHistory>;