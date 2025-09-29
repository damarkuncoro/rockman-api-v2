import { departments } from "./table";
import { InferSelectModel, InferInsertModel } from "drizzle-orm";

export type SelectDepartment = InferSelectModel<typeof departments>;
export type InsertDepartment = InferInsertModel<typeof departments>;