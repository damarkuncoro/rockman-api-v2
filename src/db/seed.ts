import db from '.';
import * as schema from './schema';
import { hash } from 'bcryptjs';
import { randomUUID } from 'crypto';

type User = typeof schema.users.$inferInsert;

async function main() {
  console.log('Seeding started...');

  // Delete all existing data
  await db.delete(schema.employmentHistory);
  await db.delete(schema.userEmployees);
  await db.delete(schema.positions);
  await db.delete(schema.users);

  const hashedPassword = await hash('password123', 12);

  // Seed Users
  const users = await db
    .insert(schema.users)
    .values([
      {
        id: randomUUID(),
        email: 'admin@rockman.com',
        passwordHash: hashedPassword,
        name: 'Admin User',
      },
      {
        id: randomUUID(),
        email: 'employee1@rockman.com',
        passwordHash: hashedPassword,
        name: 'John Doe',
      },
      {
        id: randomUUID(),
        email: 'employee2@rockman.com',
        passwordHash: hashedPassword,
        name: 'Jane Smith',
      },
    ])
    .returning();

  // Seed User Employees
  const userEmployees = await db
    .insert(schema.userEmployees)
    .values(
      users.map((user: User) => ({
        id: user.id,
        userId: user.id,
        firstName: user.name.split(' ')[0],
        lastName: user.name.split(' ')[1] || '',
      })),
    )
    .returning();

  // Seed Positions
  const positions = await db
    .insert(schema.positions)
    .values([
      {
        id: randomUUID(),
        title: 'Software Engineer',
        description: 'Develops and maintains software applications.',
      },
      {
        id: randomUUID(),
        title: 'Project Manager',
        description: 'Manages software development projects.',
      },
      {
        id: randomUUID(),
        title: 'UI/UX Designer',
        description: 'Designs user interfaces and experiences.',
      },
    ])
    .returning();

  // Seed Employment History
  await db.insert(schema.employmentHistory).values([
    {
      id: randomUUID(),
      employeeId: userEmployees[1].id,
      positionId: positions[0].id,
      startDate: new Date('2023-01-15').toISOString().split('T')[0],
      endDate: new Date('2024-01-15').toISOString().split('T')[0],
    },
    {
      id: randomUUID(),
      employeeId: userEmployees[1].id,
      positionId: positions[1].id,
      startDate: new Date('2024-01-16').toISOString().split('T')[0],
    },
    {
      id: randomUUID(),
      employeeId: userEmployees[2].id,
      positionId: positions[2].id,
      startDate: new Date('2023-05-20').toISOString().split('T')[0],
    },
  ]);

  console.log('Seeding completed successfully!');
}

main().catch((error) => {
  console.error('Error during seeding:', error);
  process.exit(1);
});