// import { faker } from '@faker-js/faker';
import db from '..';
import { memberships } from '../schema/memberships';

/**
 * Seed data untuk tabel memberships
 * 
 * Domain: Customer Management
 * Responsibility: Mengisi data dummy untuk tabel memberships
 */
export async function seedMemberships() {
  console.log('Seeding memberships...');

  // Check if memberships already exist
  const existingMemberships = await db.select().from(memberships).limit(1);
  if (existingMemberships.length > 0) {
    console.log('Memberships already exist, skipping...');
    return;
  }

  const membershipData = [
    {
      name: 'Bronze',
      slug: 'bronze',
      minPoints: 0,
      discountPercentage: '0.00',
      description: 'Basic membership tier',
    },
    {
      name: 'Silver',
      slug: 'silver',
      minPoints: 500,
      discountPercentage: '5.00',
      description: 'Silver membership with 5% discount',
    },
    {
      name: 'Gold',
      slug: 'gold',
      minPoints: 1000,
      discountPercentage: '10.00',
      description: 'Gold membership with 10% discount',
    },
    {
      name: 'Platinum',
      slug: 'platinum',
      minPoints: 2500,
      discountPercentage: '15.00',
      description: 'Platinum membership with 15% discount',
    },
    {
      name: 'Diamond',
      slug: 'diamond',
      minPoints: 5000,
      discountPercentage: '20.00',
      description: 'Diamond membership with 20% discount',
    },
  ];

  await db.insert(memberships).values(membershipData);
  console.log('Seeding memberships complete.');
}