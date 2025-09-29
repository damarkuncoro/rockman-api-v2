import { featureCategories } from "./table";
import { InferSelectModel, InferInsertModel } from "drizzle-orm";

export type SelectFeatureCategory = InferSelectModel<typeof featureCategories>;
export type InsertFeatureCategory = InferInsertModel<typeof featureCategories>;