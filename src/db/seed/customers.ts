import { faker } from '@faker-js/faker';
import db from '..';
import { customers } from '../schema/customers';
import { users } from '../schema/users';

/**
 * Seed data untuk tabel customers
 * 
 * Domain: Customer Management
 * Responsibility: Mengisi data dummy untuk tabel customers
 */
export async function seedCustomers() {
  console.log('Seeding customers...');

  // Ambil data users, departments, dan memberships yang sudah ada
  const existingUsers = await db.select({ id: users.id }).from(users);
  // const existingDepartments = await db.select({ id: departments.id }).from(departments);
  // const existingMemberships = await db.select({ id: memberships.id }).from(memberships);

  if (existingUsers.length === 0) {
    console.log('No users found. Please seed users first.');
    return;
  }

  const customerData = Array.from({ length: 20 }).map(() => ({
    userId: faker.helpers.arrayElement(existingUsers.map(u => u.id)),
    customerType: faker.helpers.arrayElement(['individual', 'business', 'enterprise']),
    customerTier: faker.helpers.arrayElement(['bronze', 'silver', 'gold', 'platinum']),
    customerSince: faker.date.past({ years: 5 }).toISOString().split('T')[0], // Convert Date to YYYY-MM-DD string
    customerStatus: faker.helpers.arrayElement(['Active', 'Inactive', 'Suspended']) as 'Active' | 'Inactive' | 'Suspended',
    customerSegment: faker.helpers.arrayElement(['residential', 'commercial', 'enterprise']),
  }));

  await db.insert(customers).values(customerData);
  console.log('Seeding customers complete.');
}