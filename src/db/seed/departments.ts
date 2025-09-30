// import { faker } from '@faker-js/faker';
import db from '..';
import { departments } from '../schema/departments';

/**
 * Seed data untuk tabel departments
 * 
 * Domain: HR Management
 * Responsibility: Mengisi data dummy untuk tabel departments
 */
export async function seedDepartments() {
  console.log('Seeding departments...');

  // Check if departments already exist
  const existingDepartments = await db.select().from(departments).limit(1);
  if (existingDepartments.length > 0) {
    console.log('Departments already exist, skipping...');
    return;
  }

  const departmentData = [
    {
      name: 'Engineering',
      slug: 'engineering',
      code: 'ENG',
      description: 'Software development and technical operations',
    },
    {
      name: 'Marketing',
      slug: 'marketing',
      code: 'MKT',
      description: 'Marketing and promotional activities',
    },
    {
      name: 'Sales',
      slug: 'sales',
      code: 'SLS',
      description: 'Sales and customer acquisition',
    },
    {
      name: 'Customer Support',
      slug: 'customer-support',
      code: 'CS',
      description: 'Customer service and technical support',
    },
    {
      name: 'Human Resources',
      slug: 'human-resources',
      code: 'HR',
      description: 'Human resources and employee management',
    },
    {
      name: 'Finance',
      slug: 'finance',
      code: 'FIN',
      description: 'Financial management and accounting',
    },
    {
      name: 'Operations',
      slug: 'operations',
      code: 'OPS',
      description: 'Business operations and process management',
    },
  ];

  await db.insert(departments).values(departmentData);
  console.log('Seeding departments complete.');
}