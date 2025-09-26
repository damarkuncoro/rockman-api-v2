import { defineConfig } from "drizzle-kit";
import { resolve } from "path";
import "tsconfig-paths/register";

export default defineConfig({
  dialect: "postgresql",
  schema: resolve(__dirname, "src/db/schema/index.ts"),
  out: "./drizzle",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});