import db from '.';
import * as schema from './schema';
import { hash } from 'bcryptjs';
import { randomUUID } from 'crypto';

async function main() {
  console.log('Seeding started...');

  // Clear existing data
  await db.delete(schema.employmentHistory);
  await db.delete(schema.userEmployees);
  await db.delete(schema.positions);
  await db.delete(schema.users);
  await db.delete(schema.departments);
  await db.delete(schema.roles);
  await db.delete(schema.features);
  await db.delete(schema.featureCategories);
  await db.delete(schema.roleFeatures);

  const hashedPassword = await hash('password123', 12);

  // Seed Departments
  const departments = await db
    .insert(schema.departments)
    .values([
      {
        id: randomUUID(),
        name: 'Engineering',
        description: 'Handles all software development.',
        slug: 'engineering',
        code: 'ENG',
      },
      {
        id: randomUUID(),
        name: 'Human Resources',
        description: 'Manages employee relations.',
        slug: 'human-resources',
        code: 'HR',
      },
      {
        id: randomUUID(),
        name: 'Marketing',
        description: 'Promotes the company and its products.',
        slug: 'marketing',
        code: 'MKT',
      },
    ])
    .returning();

  // Seed Roles
  const roles = await db
    .insert(schema.roles)
    .values([
      { id: randomUUID(), name: 'Admin', grantsAll: true },
      { id: randomUUID(), name: 'Manager' },
      { id: randomUUID(), name: 'Employee' },
    ])
    .returning();

  // Seed Feature Categories
  const featureCategories = await db
    .insert(schema.featureCategories)
    .values([
      { id: randomUUID(), name: 'User Management', slug: 'user-management' },
      { id: randomUUID(), name: 'Payroll', slug: 'payroll' },
    ])
    .returning();

  // Seed Features
  const features = await db
    .insert(schema.features)
    .values([
      {
        id: randomUUID(),
        name: 'user:create',
        description: 'Allows creating new users.',
        categoryId: featureCategories[0].id,
      },
      {
        id: randomUUID(),
        name: 'user:read',
        description: 'Allows reading user data.',
        categoryId: featureCategories[0].id,
      },
      {
        id: randomUUID(),
        name: 'user:update',
        description: 'Allows updating user data.',
        categoryId: featureCategories[0].id,
      },
      {
        id: randomUUID(),
        name: 'user:delete',
        description: 'Allows deleting users.',
        categoryId: featureCategories[0].id,
      },
      {
        id: randomUUID(),
        name: 'payroll:read',
        description: 'Allows reading payroll data.',
        categoryId: featureCategories[1].id,
      },
    ])
    .returning();

  // Seed RoleFeatures
  await db.insert(schema.roleFeatures).values([
    // Admin role has all user-related features
    { roleId: roles[0].id, featureId: features[0].id },
    { roleId: roles[0].id, featureId: features[1].id },
    { roleId: roles[0].id, featureId: features[2].id },
    { roleId: roles[0].id, featureId: features[3].id },
    { roleId: roles[0].id, featureId: features[4].id },
    // Manager role can read user and payroll data
    { roleId: roles[1].id, featureId: features[1].id },
    { roleId: roles[1].id, featureId: features[4].id },
    // Employee role can only read their own user data (handled by application logic)
    { roleId: roles[2].id, featureId: features[1].id },
  ]);

  // Seed Users
  const users = await db
    .insert(schema.users)
    .values([
      {
        id: randomUUID(),
        email: 'admin@rockman.com',
        username: 'admin',
        passwordHash: hashedPassword,
        name: 'Admin User',
        departmentId: departments[0].id,
      },
      {
        id: randomUUID(),
        email: 'manager@rockman.com',
        username: 'manager',
        passwordHash: hashedPassword,
        name: 'Manager User',
        departmentId: departments[1].id,
      },
      {
        id: randomUUID(),
        email: 'employee@rockman.com',
        username: 'employee',
        passwordHash: hashedPassword,
        name: 'Employee User',
        departmentId: departments[0].id,
      },
    ])
    .returning();

  // Seed User Roles
  await db.insert(schema.userRoles).values([
    { userId: users[0].id, roleId: roles[0].id },
    { userId: users[1].id, roleId: roles[1].id },
    { userId: users[2].id, roleId: roles[2].id },
  ]);

  // Seed Positions
  const positions = await db
    .insert(schema.positions)
    .values([
      {
        id: randomUUID(),
        title: 'Lead Software Engineer',
        description: 'Leads a team of software engineers.',
        departmentId: departments[0].id,
      },
      {
        id: randomUUID(),
        title: 'HR Manager',
        description: 'Manages the human resources department.',
        departmentId: departments[1].id,
      },
      {
        id: randomUUID(),
        title: 'Marketing Specialist',
        description: 'Executes marketing campaigns.',
        departmentId: departments[2].id,
      },
    ])
    .returning();

  // Seed User Employees
  const userEmployees = await db
    .insert(schema.userEmployees)
    .values(
      users.map((user) => ({
        id: user.id,
        userId: user.id,
        firstName: user.name.split(' ')[0],
        lastName: user.name.split(' ')[1] || '',
      })),
    )
    .returning();

  // Seed Employment History
  await db.insert(schema.employmentHistory).values([
    {
      id: randomUUID(),
      employeeId: userEmployees[0].id,
      positionId: positions[0].id,
      startDate: new Date('2022-01-01').toISOString().split('T')[0],
    },
    {
      id: randomUUID(),
      employeeId: userEmployees[1].id,
      positionId: positions[1].id,
      startDate: new Date('2023-01-01').toISOString().split('T')[0],
    },
    {
      id: randomUUID(),
      employeeId: userEmployees[2].id,
      positionId: positions[0].id,
      startDate: new Date('2024-01-01').toISOString().split('T')[0],
    },
  ]);

  console.log('Comprehensive seeding completed successfully!');
}

main().catch((error) => {
  console.error('Error during seeding:', error);
  process.exit(1);
});