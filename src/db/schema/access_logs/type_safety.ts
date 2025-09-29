import { accessLogs } from "./table";
import { InferSelectModel, InferInsertModel } from "drizzle-orm";

export type SelectAccessLog = InferSelectModel<typeof accessLogs>;
export type InsertAccessLog = InferInsertModel<typeof accessLogs>;
