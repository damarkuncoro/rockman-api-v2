import { seedAll } from './seed/index';

async function main() {
  await seedAll();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});