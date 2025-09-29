import { roleFeatures } from "./table";
import { InferSelectModel, InferInsertModel } from "drizzle-orm";

export type SelectRoleFeature = InferSelectModel<typeof roleFeatures>;
export type InsertRoleFeature = InferInsertModel<typeof roleFeatures>;