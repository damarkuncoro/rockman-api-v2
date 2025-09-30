// import { faker } from '@faker-js/faker';
import db from '..';
import { roles } from '../schema/roles';

/**
 * Seed data untuk tabel roles
 * 
 * Domain: Access Control
 * Responsibility: Mengisi data dummy untuk tabel roles
 */
export async function seedRoles() {
  console.log('Seeding roles...');

  // Check if roles already exist
  const existingRoles = await db.select().from(roles).limit(1);
  if (existingRoles.length > 0) {
    console.log('Roles already exist, skipping...');
    return;
  }

  const roleData = [
    {
      name: 'Super Admin',
      slug: 'super-admin',
      description: 'Full system access and administration',
    },
    {
      name: 'Admin',
      slug: 'admin',
      description: 'Administrative access to most features',
    },
    {
      name: 'Manager',
      slug: 'manager',
      description: 'Management level access',
    },
    {
      name: 'Employee',
      slug: 'employee',
      description: 'Standard employee access',
    },
    {
      name: 'Customer Support',
      slug: 'customer-support',
      description: 'Customer service representative',
    },
    {
      name: 'Sales Representative',
      slug: 'sales-rep',
      description: 'Sales team member',
    },
    {
      name: 'Technician',
      slug: 'technician',
      description: 'Technical support and maintenance',
    },
    {
      name: 'Customer',
      slug: 'customer',
      description: 'End customer access',
    },
  ];

  await db.insert(roles).values(roleData);
  console.log('Seeding roles complete.');
}