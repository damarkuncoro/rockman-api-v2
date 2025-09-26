import db from './';
import * as schema from './schema';

async function main() {
  console.log('Seeding database for ISP company...');

  // Clear existing data
  await db.delete(schema.userIdentities);
  await db.delete(schema.loyaltyPoints);
  await db.delete(schema.userMemberships);
  await db.delete(schema.memberships);
  await db.delete(schema.ticketReplies);
  await db.delete(schema.tickets);
  await db.delete(schema.transactions);
  await db.delete(schema.userProducts);
  await db.delete(schema.products);
  await db.delete(schema.userRoles);
  await db.delete(schema.roleFeatures);
  await db.delete(schema.policies);
  await db.delete(schema.userDevices);
  await db.delete(schema.userAddresses);
  await db.delete(schema.userPhones);
  await db.delete(schema.users);
  await db.delete(schema.departments);
  await db.delete(schema.roles);
  await db.delete(schema.features);
  await db.delete(schema.featureCategories);
  console.log('Cleared existing data');

  // Departments
  const departments = await db.insert(schema.departments).values([
    { name: 'Technical Support', slug: 'tech-support', code: 'TS' },
    { name: 'Billing', slug: 'billing', code: 'BL' },
    { name: 'Sales', slug: 'sales', code: 'SL' },
    { name: 'Network Operations', slug: 'net-ops', code: 'NO' },
  ]).returning();
  console.log('Seeded departments');

  // Users
  const users = await db.insert(schema.users).values([
    { name: 'Support Agent', email: 'support@isp.com', passwordHash: 'hashed_password', departmentId: departments[0].id },
    { name: 'Billing Specialist', email: 'billing@isp.com', passwordHash: 'hashed_password', departmentId: departments[1].id },
    { name: 'Sales Rep', email: 'sales@isp.com', passwordHash: 'hashed_password', departmentId: departments[2].id },
    { name: 'Network Engineer', email: 'netops@isp.com', passwordHash: 'hashed_password', departmentId: departments[3].id },
  ]).returning();
  console.log('Seeded users');

  // Roles
  const roles = await db.insert(schema.roles).values([
    { name: 'Support Agent', grantsAll: false },
    { name: 'Billing Specialist', grantsAll: false },
    { name: 'Sales Representative', grantsAll: false },
    { name: 'Network Engineer', grantsAll: true },
  ]).returning();
  console.log('Seeded roles');

  // User Roles
  await db.insert(schema.userRoles).values([
    { userId: users[0].id, roleId: roles[0].id },
    { userId: users[1].id, roleId: roles[1].id },
    { userId: users[2].id, roleId: roles[2].id },
    { userId: users[3].id, roleId: roles[3].id },
  ]);
  console.log('Seeded user roles');

  // Feature Categories
  const featureCategories = await db.insert(schema.featureCategories).values([
    { name: 'Customer Management', slug: 'customer-management', description: 'Features for managing customer accounts.' },
    { name: 'Billing & Invoicing', slug: 'billing-invoicing', description: 'Features for managing billing and invoices.' },
    { name: 'Network Tools', slug: 'network-tools', description: 'Tools for monitoring and managing the network.' },
  ]).returning();
  console.log('Seeded feature categories');

  // Features
  const features = await db.insert(schema.features).values([
    { name: 'Manage Tickets', description: 'Create, update, and close support tickets.', categoryId: featureCategories[0].id },
    { name: 'Create Invoices', description: 'Generate new invoices for customers.', categoryId: featureCategories[1].id },
    { name: 'Monitor Network', description: 'Monitor network status and performance.', categoryId: featureCategories[2].id },
  ]).returning();
  console.log('Seeded features');

  // Role Features
  await db.insert(schema.roleFeatures).values([
    { roleId: roles[0].id, featureId: features[0].id },
    { roleId: roles[1].id, featureId: features[1].id },
    { roleId: roles[3].id, featureId: features[2].id },
  ]);
  console.log('Seeded role features');

  // Policies
  await db.insert(schema.policies).values([
    { featureId: features[0].id, attribute: 'ticket.status', operator: '!=', value: 'closed' },
    { featureId: features[1].id, attribute: 'invoice.amount', operator: '<=', value: '1000' },
    { featureId: features[2].id, attribute: 'device.type', operator: '==', value: 'router' },
  ]);
  console.log('Seeded policies');

  // Products
  const products = await db.insert(schema.products).values([
    { name: 'Basic Internet', description: 'Up to 10 Mbps', price: '25.00' },
    { name: 'Premium Internet', description: 'Up to 100 Mbps', price: '50.00' },
    { name: 'Business Internet', description: 'Up to 1 Gbps', price: '100.00' },
  ]).returning();
  console.log('Seeded products');

  // User Products
  const userProducts = await db.insert(schema.userProducts).values([
    { userId: users[0].id, productId: products[0].id },
    { userId: users[1].id, productId: products[1].id },
    { userId: users[2].id, productId: products[2].id },
  ]).returning();
  console.log('Seeded user products');

  // Transactions
  await db.insert(schema.transactions).values([
    { userId: users[0].id, userProductId: userProducts[0].id, amount: '25.00', status: 'completed', paymentMethod: 'credit_card' },
    { userId: users[1].id, userProductId: userProducts[1].id, amount: '50.00', status: 'completed', paymentMethod: 'bank_transfer' },
    { userId: users[2].id, userProductId: userProducts[2].id, amount: '100.00', status: 'pending', paymentMethod: 'credit_card' },
  ]);
  console.log('Seeded transactions');

  // Tickets
  const tickets = await db.insert(schema.tickets).values([
    { userId: users[0].id, title: 'Internet connection is slow', description: 'My internet connection has been very slow for the past few days.', status: 'open', priority: 'high' },
    { userId: users[1].id, title: 'Billing inquiry', description: 'I have a question about my latest bill.', status: 'in_progress', priority: 'medium' },
  ]).returning();
  console.log('Seeded tickets');

  // Ticket Replies
  await db.insert(schema.ticketReplies).values([
    { ticketId: tickets[0].id, userId: users[0].id, message: 'I have already tried restarting my router, but it did not help.' },
    { ticketId: tickets[1].id, userId: users[1].id, message: 'I would like to know why my bill is higher this month.' },
  ]);
  console.log('Seeded ticket replies');

  // Memberships
  const memberships = await db.insert(schema.memberships).values([
    { name: 'Bronze', description: 'Basic membership tier', minPoints: 0, discountPercentage: '0' },
    { name: 'Silver', description: 'Intermediate membership tier', minPoints: 1000, discountPercentage: '5' },
    { name: 'Gold', description: 'Premium membership tier', minPoints: 5000, discountPercentage: '10' },
  ]).returning();
  console.log('Seeded memberships');

  // User Memberships
  await db.insert(schema.userMemberships).values([
    { userId: users[0].id, membershipId: memberships[0].id },
    { userId: users[1].id, membershipId: memberships[1].id },
    { userId: users[2].id, membershipId: memberships[2].id },
  ]);
  console.log('Seeded user memberships');

  // Loyalty Points
  await db.insert(schema.loyaltyPoints).values([
    { userId: users[0].id, points: 500 },
    { userId: users[1].id, points: 1500 },
    { userId: users[2].id, points: 6000 },
  ]);
  console.log('Seeded loyalty points');

  // User Identities
  await db.insert(schema.userIdentities).values([
    { userId: users[0].id, type: 'KTP', number: '1234567890123456' },
    { userId: users[1].id, type: 'SIM', number: '0987654321' },
    { userId: users[2].id, type: 'Passport', number: 'A1234567' },
  ]);
  console.log('Seeded user identities');

  // User Addresses and Phones
  await db.insert(schema.userAddresses).values([
    { userId: users[0].id, label: 'Home', recipientName: 'Support Agent', phoneNumber: '111-222-3333', addressLine1: '123 Support St', city: 'Bandung', province: 'West Java', postalCode: '40111' },
  ]);
  await db.insert(schema.userPhones).values([
    { userId: users[0].id, label: 'Work', phoneNumber: '111-222-3333' },
  ]);
  console.log('Seeded user addresses and phones');

  console.log('Database seeding complete.');
}

main().catch((err) => {
  console.error('Error seeding database:', err);
  process.exit(1);
});