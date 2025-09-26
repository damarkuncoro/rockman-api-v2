import { migrate } from "drizzle-orm/node-postgres/migrator";
import db from ".";

async function main() {
  await migrate(db, { migrationsFolder: "./drizzle" });
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});