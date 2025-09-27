import { relations } from "drizzle-orm";
import { outages } from "./table";

// No relations defined for now, but the file is here for consistency.
export const outagesRelations = relations(outages, () => ({}));