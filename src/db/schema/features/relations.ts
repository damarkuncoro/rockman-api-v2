import { relations } from "drizzle-orm";
import { features } from "./table";
import { featureCategories } from "../feature_categories/table";

export const featuresRelations = relations(features, ({ one }) => ({
  featureCategory: one(featureCategories, {
    fields: [features.categoryId],
    references: [featureCategories.id],
  }),
}));