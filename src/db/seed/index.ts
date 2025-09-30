import { seedDepartments } from './departments';
import { seedMemberships } from './memberships';
import { seedRoles } from './roles';
import { seedFeatureCategories } from './feature_categories';
import { seedFeatures } from './features';
import { seedProducts } from './products';
import { seedPositions } from './positions';
import { seedUsers } from './users';
import { seedEmployees } from './employees';
import { seedCustomers } from './customers';

/**
 * Main seeding function yang menjalankan semua seed dalam urutan yang benar
 * 
 * Domain: Database Management
 * Responsibility: Orchestrate seeding process untuk semua tabel
 */
export async function seedAll() {
  console.log('🌱 Starting database seeding...');
  
  try {
    // Seed tabel dasar yang tidak memiliki dependencies
    console.log('\n📋 Seeding basic tables...');
    await seedDepartments();
    await seedMemberships();
    await seedRoles();
    await seedFeatureCategories();
    await seedPositions();
    await seedProducts();
    
    // Seed features (depends on feature_categories)
    console.log('\n🔧 Seeding features...');
    await seedFeatures();
    
    // Seed users (depends on departments)
    console.log('\n👥 Seeding users...');
    await seedUsers();
    
    // Seed tabel yang bergantung pada users
    console.log('\n🏢 Seeding user-dependent tables...');
    await seedEmployees();
    await seedCustomers();
    
    console.log('\n✅ Database seeding completed successfully!');
  } catch (error) {
    console.error('❌ Error during seeding:', error);
    throw error;
  }
}

/**
 * Individual seed functions untuk dijalankan secara terpisah
 */
export {
  seedDepartments,
  seedMemberships,
  seedRoles,
  seedFeatureCategories,
  seedFeatures,
  seedProducts,
  seedPositions,
  seedUsers,
  seedEmployees,
  seedCustomers,
};

// Jika file ini dijalankan langsung
if (require.main === module) {
  seedAll()
    .then(() => {
      console.log('Seeding process completed');
      process.exit(0);
    })
    .catch((error) => {
      console.error('Seeding failed:', error);
      process.exit(1);
    });
}