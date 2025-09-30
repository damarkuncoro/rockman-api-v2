import { faker } from '@faker-js/faker';
import db from '..';
import { employees } from '../schema/employees';
import { users } from '../schema/users';

/**
 * Seed data untuk tabel employees
 * 
 * Domain: HR Management
 * Responsibility: Mengisi data dummy untuk tabel employees
 */
export async function seedEmployees() {
  console.log('Seeding employees...');

  // Ambil data users yang sudah ada
  const existingUsers = await db.select({ id: users.id }).from(users);

  if (existingUsers.length === 0) {
    console.log('No users found. Please seed users first.');
    return;
  }

  const employeeData = Array.from({ length: 15 }).map(() => ({
    userId: faker.helpers.arrayElement(existingUsers.map(u => u.id)),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    dateOfBirth: faker.date.birthdate({ min: 22, max: 65, mode: 'age' }).toISOString().split('T')[0], // Convert Date to YYYY-MM-DD string
    gender: faker.helpers.arrayElement(['male', 'female', 'other'] as const),
    maritalStatus: faker.helpers.arrayElement(['single', 'married', 'divorced', 'widowed'] as const),
    nationality: faker.location.country(),
    personalEmail: faker.internet.email(),
    phoneNumber: faker.phone.number().substring(0, 20),
    address: faker.location.streetAddress({ useFullAddress: true }),
  }));

  await db.insert(employees).values(employeeData);
  console.log('Seeding employees complete.');
}