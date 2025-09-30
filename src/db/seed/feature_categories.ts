// import { faker } from '@faker-js/faker';
import db from '..';
import { featureCategories } from '../schema/feature_categories';

/**
 * Seed data untuk tabel feature_categories
 * 
 * Domain: RBAC (Role-Based Access Control)
 * Responsibility: Mengisi data dummy untuk tabel feature_categories
 */
export async function seedFeatureCategories() {
  console.log('Seeding feature categories...');

  // Check if feature categories already exist
  const existingCategories = await db.select().from(featureCategories).limit(1);
  if (existingCategories.length > 0) {
    console.log('Feature categories already exist, skipping...');
    return;
  }

  const categoryData = [
    {
      name: 'User Management',
      slug: 'user-management',
      description: 'Features related to user administration',
    },
    {
      name: 'Customer Management',
      slug: 'customer-management',
      description: 'Features for managing customers',
    },
    {
      name: 'Billing & Payments',
      slug: 'billing-payments',
      description: 'Financial and billing features',
    },
    {
      name: 'Support & Tickets',
      slug: 'support-tickets',
      description: 'Customer support and ticketing system',
    },
    {
      name: 'Network Management',
      slug: 'network-management',
      description: 'Network infrastructure management',
    },
    {
      name: 'Reporting & Analytics',
      slug: 'reporting-analytics',
      description: 'Reports and data analytics',
    },
    {
      name: 'System Administration',
      slug: 'system-admin',
      description: 'System configuration and administration',
    },
    {
      name: 'HR Management',
      slug: 'hr-management',
      description: 'Human resources management features',
    },
  ];

  await db.insert(featureCategories).values(categoryData);
  console.log('Seeding feature categories complete.');
}