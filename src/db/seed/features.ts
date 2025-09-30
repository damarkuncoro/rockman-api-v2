// import { faker } from '@faker-js/faker';
import db from '..';
import { features } from '../schema/features';
import { featureCategories } from '../schema/feature_categories';

/**
 * Seed data untuk tabel features
 * 
 * Domain: RBAC (Role-Based Access Control)
 * Responsibility: Mengisi data dummy untuk tabel features
 */
export async function seedFeatures() {
  console.log('Seeding features...');

  // Check if features already exist
  const existingFeatures = await db.select().from(features).limit(1);
  if (existingFeatures.length > 0) {
    console.log('Features already exist, skipping...');
    return;
  }

  // Get existing feature categories
  const existingCategories = await db.select({ id: featureCategories.id, slug: featureCategories.slug }).from(featureCategories);
  
  if (existingCategories.length === 0) {
    console.log('No feature categories found. Please seed feature categories first.');
    return;
  }

  const getCategoryId = (slug: string) => {
    const category = existingCategories.find(c => c.slug === slug);
    return category?.id || existingCategories[0].id;
  };

  const featureData = [
    // User Management Features
    {
      name: 'Create User',
      slug: 'create-user',
      description: 'Create new user accounts',
      categoryId: getCategoryId('user-management'),
    },
    {
      name: 'Edit User',
      slug: 'edit-user',
      description: 'Edit existing user information',
      categoryId: getCategoryId('user-management'),
    },
    {
      name: 'Delete User',
      slug: 'delete-user',
      description: 'Delete user accounts',
      categoryId: getCategoryId('user-management'),
    },
    {
      name: 'View Users',
      slug: 'view-users',
      description: 'View user list and details',
      categoryId: getCategoryId('user-management'),
    },
    
    // Customer Management Features
    {
      name: 'Create Customer',
      slug: 'create-customer',
      description: 'Create new customer records',
      categoryId: getCategoryId('customer-management'),
    },
    {
      name: 'Edit Customer',
      slug: 'edit-customer',
      description: 'Edit customer information',
      categoryId: getCategoryId('customer-management'),
    },
    {
      name: 'View Customers',
      slug: 'view-customers',
      description: 'View customer list and details',
      categoryId: getCategoryId('customer-management'),
    },
    
    // Billing Features
    {
      name: 'Create Invoice',
      slug: 'create-invoice',
      description: 'Generate customer invoices',
      categoryId: getCategoryId('billing-payments'),
    },
    {
      name: 'Process Payment',
      slug: 'process-payment',
      description: 'Process customer payments',
      categoryId: getCategoryId('billing-payments'),
    },
    {
      name: 'View Billing Reports',
      slug: 'view-billing-reports',
      description: 'Access billing and financial reports',
      categoryId: getCategoryId('billing-payments'),
    },
    
    // Support Features
    {
      name: 'Create Ticket',
      slug: 'create-ticket',
      description: 'Create support tickets',
      categoryId: getCategoryId('support-tickets'),
    },
    {
      name: 'Assign Ticket',
      slug: 'assign-ticket',
      description: 'Assign tickets to staff',
      categoryId: getCategoryId('support-tickets'),
    },
    {
      name: 'Close Ticket',
      slug: 'close-ticket',
      description: 'Close resolved tickets',
      categoryId: getCategoryId('support-tickets'),
    },
    
    // Network Management Features
    {
      name: 'Monitor Network',
      slug: 'monitor-network',
      description: 'Monitor network status and performance',
      categoryId: getCategoryId('network-management'),
    },
    {
      name: 'Configure Equipment',
      slug: 'configure-equipment',
      description: 'Configure network equipment',
      categoryId: getCategoryId('network-management'),
    },
    
    // System Admin Features
    {
      name: 'Manage Roles',
      slug: 'manage-roles',
      description: 'Manage user roles and permissions',
      categoryId: getCategoryId('system-admin'),
    },
    {
      name: 'System Settings',
      slug: 'system-settings',
      description: 'Configure system settings',
      categoryId: getCategoryId('system-admin'),
    },
  ];

  await db.insert(features).values(featureData);
  console.log('Seeding features complete.');
}