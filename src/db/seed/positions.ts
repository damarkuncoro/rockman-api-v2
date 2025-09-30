// import { faker } from '@faker-js/faker';
import db from '..';
import { positions } from '../schema/positions';

/**
 * Seed data untuk tabel positions
 * 
 * Domain: HR Management
 * Responsibility: Mengisi data dummy untuk tabel positions
 */
export async function seedPositions() {
  console.log('Seeding positions...');

  // Check if positions already exist
  const existingPositions = await db.select().from(positions).limit(1);
  if (existingPositions.length > 0) {
    console.log('Positions already exist, skipping...');
    return;
  }

  const positionData = [
    {
      title: 'Chief Executive Officer',
      description: 'Overall leadership and strategic direction of the company',
      level: 'executive',
      minSalary: '50000000.00',
      maxSalary: '100000000.00',
    },
    {
      title: 'Chief Technology Officer',
      description: 'Technology leadership and innovation strategy',
      level: 'executive',
      minSalary: '40000000.00',
      maxSalary: '80000000.00',
    },
    {
      title: 'Engineering Manager',
      description: 'Lead and manage engineering teams',
      level: 'management',
      minSalary: '25000000.00',
      maxSalary: '40000000.00',
    },
    {
      title: 'Senior Software Engineer',
      description: 'Senior level software development and architecture',
      level: 'senior',
      minSalary: '18000000.00',
      maxSalary: '30000000.00',
    },
    {
      title: 'Software Engineer',
      description: 'Software development and maintenance',
      level: 'mid',
      minSalary: '12000000.00',
      maxSalary: '20000000.00',
    },
    {
      title: 'Junior Software Engineer',
      description: 'Entry level software development',
      level: 'junior',
      minSalary: '8000000.00',
      maxSalary: '15000000.00',
    },
    {
      title: 'Network Engineer',
      description: 'Network infrastructure design and maintenance',
      level: 'mid',
      minSalary: '15000000.00',
      maxSalary: '25000000.00',
    },
    {
      title: 'Customer Support Manager',
      description: 'Manage customer support operations',
      level: 'management',
      minSalary: '20000000.00',
      maxSalary: '30000000.00',
    },
    {
      title: 'Customer Support Representative',
      description: 'Provide customer service and technical support',
      level: 'junior',
      minSalary: '6000000.00',
      maxSalary: '12000000.00',
    },
    {
      title: 'Sales Manager',
      description: 'Lead sales team and strategy',
      level: 'management',
      minSalary: '22000000.00',
      maxSalary: '35000000.00',
    },
    {
      title: 'Sales Representative',
      description: 'Direct sales and customer acquisition',
      level: 'mid',
      minSalary: '10000000.00',
      maxSalary: '18000000.00',
    },
    {
      title: 'HR Manager',
      description: 'Human resources management and strategy',
      level: 'management',
      minSalary: '20000000.00',
      maxSalary: '30000000.00',
    },
    {
      title: 'Finance Manager',
      description: 'Financial planning and management',
      level: 'management',
      minSalary: '25000000.00',
      maxSalary: '40000000.00',
    },
    {
      title: 'Marketing Specialist',
      description: 'Marketing campaigns and brand management',
      level: 'mid',
      minSalary: '12000000.00',
      maxSalary: '20000000.00',
    },
    {
      title: 'System Administrator',
      description: 'System maintenance and administration',
      level: 'mid',
      minSalary: '15000000.00',
      maxSalary: '25000000.00',
    },
  ];

  await db.insert(positions).values(positionData);
  console.log('Seeding positions complete.');
}