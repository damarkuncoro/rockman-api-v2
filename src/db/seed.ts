import { seedUsers } from './seed/users';

async function main() {
  await seedUsers();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});