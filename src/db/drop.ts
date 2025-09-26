import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

const client = new Client({
  connectionString: process.env.DATABASE_URL!,
});

async function main() {
  await client.connect();
  const db = drizzle(client);

  const result = await db.execute(
    "SELECT tablename FROM pg_tables WHERE schemaname = 'public'"
  );

  const tables = result.rows as { tablename: string }[];

  for (const table of tables) {
    await db.execute(`DROP TABLE IF EXISTS "${table.tablename}" CASCADE`);
  }

  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});