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

  // Get existing departments, roles, and memberships
  const existingDepartments = await db.select().from(departments).limit(5);
  const existingRoles = await db.select().from(roles).limit(5);
  const existingMemberships = await db.select().from(memberships).limit(5);

  // Create users
  for (let i = 0; i < 10; i++) {
    const user = await db.insert(users).values({
      username: faker.internet.username(),
      email: faker.internet.email(),
      passwordHash: faker.internet.password(),
      departmentId: existingDepartments[i % existingDepartments.length]?.id || null,
    }).returning();

    // Add user address
    await db.insert(userAddresses).values({
      userId: user[0].id,
      label: 'Home',
      recipientName: faker.person.fullName().substring(0, 100),
      phoneNumber: faker.phone.number().substring(0, 20),
      addressLine1: faker.location.streetAddress(),
      city: faker.location.city().substring(0, 100),
      province: faker.location.state().substring(0, 100),
      postalCode: faker.location.zipCode().substring(0, 10),
    });

    // Add user phone
    await db.insert(userPhones).values({
      userId: user[0].id,
      label: 'Mobile',
      phoneNumber: faker.phone.number().substring(0, 20),
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
      roleId: existingRoles[i % existingRoles.length]?.id || existingRoles[0]?.id,
    });

    // Add user membership
    await db.insert(userMemberships).values({
      userId: user[0].id,
      membershipId: existingMemberships[i % existingMemberships.length]?.id || existingMemberships[0]?.id,
    });
  }

  console.log('Seeding users complete.');
}