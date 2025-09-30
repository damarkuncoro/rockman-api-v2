// import { faker } from '@faker-js/faker';
import db from '..';
import { products } from '../schema/products';

/**
 * Seed data untuk tabel products
 * 
 * Domain: Product Management
 * Responsibility: Mengisi data dummy untuk tabel products (layanan ISP)
 */
export async function seedProducts() {
  console.log('Seeding products...');

  // Check if products already exist
  const existingProducts = await db.select().from(products).limit(1);
  if (existingProducts.length > 0) {
    console.log('Products already exist, skipping...');
    return;
  }

  const productData = [
    // Internet Plans
    {
      name: 'Home Basic 10 Mbps',
      slug: 'home-basic-10mbps',
      description: 'Basic internet plan for home use - 10 Mbps download speed',
      price: '299000.00',
      productType: 'internet',
      isActive: true,
    },
    {
      name: 'Home Standard 25 Mbps',
      slug: 'home-standard-25mbps',
      description: 'Standard internet plan for home use - 25 Mbps download speed',
      price: '499000.00',
      productType: 'internet',
      isActive: true,
    },
    {
      name: 'Home Premium 50 Mbps',
      slug: 'home-premium-50mbps',
      description: 'Premium internet plan for home use - 50 Mbps download speed',
      price: '799000.00',
      productType: 'internet',
      isActive: true,
    },
    {
      name: 'Business Starter 100 Mbps',
      slug: 'business-starter-100mbps',
      description: 'Business internet plan - 100 Mbps with SLA guarantee',
      price: '1499000.00',
      productType: 'internet',
      isActive: true,
    },
    {
      name: 'Business Pro 500 Mbps',
      slug: 'business-pro-500mbps',
      description: 'Professional business internet - 500 Mbps with dedicated support',
      price: '4999000.00',
      productType: 'internet',
      isActive: true,
    },
    {
      name: 'Enterprise 1 Gbps',
      slug: 'enterprise-1gbps',
      description: 'Enterprise grade internet - 1 Gbps with 24/7 support',
      price: '9999000.00',
      productType: 'internet',
      isActive: true,
    },
    
    // Additional Services
    {
      name: 'Static IP Address',
      slug: 'static-ip-address',
      description: 'Dedicated static IP address for your connection',
      price: '150000.00',
      productType: 'addon',
      isActive: true,
    },
    {
      name: 'WiFi Router Rental',
      slug: 'wifi-router-rental',
      description: 'High-performance WiFi router rental service',
      price: '50000.00',
      productType: 'equipment',
      isActive: true,
    },
    {
      name: 'Installation Service',
      slug: 'installation-service',
      description: 'Professional installation and setup service',
      price: '200000.00',
      productType: 'service',
      isActive: true,
    },
    {
      name: 'Premium Support',
      slug: 'premium-support',
      description: '24/7 priority technical support service',
      price: '100000.00',
      productType: 'service',
      isActive: true,
    },
  ];

  await db.insert(products).values(productData);
  console.log('Seeding products complete.');
}