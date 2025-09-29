import db from '..';
import {
  users,
  departments,
  roles,
  userAddresses,
  userPhones,
  userIdentities,
  userRoles,
  userMemberships,
  memberships,
} from '../schema';
import { faker } from '@faker-js/faker';

export async function seedUsers() {
  console.log('Seeding users...');

  // Create departments
  const department1 = await db.insert(departments).values({
    name: 'Engineering',
    slug: 'engineering',
    code: 'ENG',
  }).returning();

  const department2 = await db.insert(departments).values({
    name: 'Marketing',
    slug: 'marketing',
    code: 'MKT',
  }).returning();

  // Create roles
  const adminRole = await db.insert(roles).values({
    name: 'Admin',
  }).returning();

  const userRole = await db.insert(roles).values({
    name: 'User',
  }).returning();

  // Create memberships
  const goldMembership = await db.insert(memberships).values({
    name: 'Gold',
    minPoints: 1000,
    discountPercentage: '10.00',
  }).returning();

  const silverMembership = await db.insert(memberships).values({
    name: 'Silver',
    minPoints: 500,
    discountPercentage: '5.00',
  }).returning();

  // Create users
  for (let i = 0; i < 10; i++) {
    const user = await db.insert(users).values({
      username: faker.internet.username(),
      email: faker.internet.email(),
      passwordHash: faker.internet.password(),
      departmentId: i % 2 === 0 ? department1[0].id : department2[0].id,
    }).returning();

    // Add user address
    await db.insert(userAddresses).values({
      userId: user[0].id,
      label: 'Home',
      recipientName: faker.person.fullName(),
      phoneNumber: faker.phone.number(),
      addressLine1: faker.location.streetAddress(),
      city: faker.location.city(),
      province: faker.location.state(),
      postalCode: faker.location.zipCode(),
    });

    // Add user phone
    await db.insert(userPhones).values({
      userId: user[0].id,
      label: 'Mobile',
      phoneNumber: faker.phone.number(),
    });

    // Add user identity
    await db.insert(userIdentities).values({
      userId: user[0].id,
      type: 'KTP',
      number: faker.string.uuid(),
    });

    // Add user role
    await db.insert(userRoles).values({
      userId: user[0].id,
      roleId: i % 3 === 0 ? adminRole[0].id : userRole[0].id,
    });

    // Add user membership
    await db.insert(userMemberships).values({
        userId: user[0].id,
        membershipId: i % 2 === 0 ? goldMembership[0].id : silverMembership[0].id,
    });
  }

  console.log('Seeding users complete.');
}