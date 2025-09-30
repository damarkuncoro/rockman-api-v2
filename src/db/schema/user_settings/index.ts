export * from "./table";
// Pastikan file relations.ts sudah dibuat sebelum mengaktifkan export ini
// export * from "./relations";

// Re-export tipe yang dibutuhkan
import { InferSelectModel, InferInsertModel } from "drizzle-orm";
import { userSettings } from "./table";

export type UserSettings = InferSelectModel<typeof userSettings>;
export type NewUserSettings = InferInsertModel<typeof userSettings>;