import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

const client = new Client({
  connectionString: process.env.DATABASE_URL!,
});

async function main() {
  await client.connect();
  const db = drizzle(client);

  const tableResult = await db.execute(
    "SELECT tablename FROM pg_tables WHERE schemaname = 'public'"
  );

  const tables = tableResult.rows as { tablename: string }[];

  for (const table of tables) {
    await db.execute(`DROP TABLE IF EXISTS "${table.tablename}" CASCADE`);
  }

  const typeResult = await db.execute(
    "SELECT typname FROM pg_type WHERE typcategory = 'E' AND typtype = 'e'"
  );

  const types = typeResult.rows as { typname: string }[];

  for (const type of types) {
    await db.execute(`DROP TYPE IF EXISTS "${type.typname}" CASCADE`);
  }

  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});