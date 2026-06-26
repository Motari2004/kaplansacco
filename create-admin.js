const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const bcrypt = require('bcryptjs');
require('dotenv/config');

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function createAdmin() {
  try {
    const hash = await bcrypt.hash('admin123', 10);
    
    await prisma.user.upsert({
      where: { email: 'admin@kaplans.co.ke' },
      update: {},
      create: {
        email: 'admin@kaplans.co.ke',
        password: hash,
        firstName: 'Admin',
        lastName: '',
        phone: '',
        idNumber: '',
        memberNumber: '',
        role: 'ADMIN',
        status: 'ACTIVE',
        monthlyContribution: 0,
        shares: 0,
        savingsBalance: 0,
      }
    });
    
    console.log('✅ Admin created with full control!');
    console.log('📧 Email: admin@kaplans.co.ke');
    console.log('🔑 Password: admin123');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

createAdmin();