import "dotenv/config";
import { execSync } from "child_process";

try {
  console.log("Ensuring drizzle directory is clean...");
  execSync("rm -rf ./drizzle");
  console.log("Drizzle directory cleaned.");

  console.log("Generating migrations...");
  execSync("drizzle-kit generate --config ./drizzle.config.ts", { stdio: "inherit" });
  console.log("Migration generation command finished.");

} catch (error) {
  console.error("An error occurred during the generation process:", error);
  process.exit(1);
}