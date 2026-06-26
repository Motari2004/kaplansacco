const { PrismaClient } = require('@prisma/client')
const { PrismaPg } = require('@prisma/adapter-pg')
const bcrypt = require('bcryptjs')
require('dotenv/config')

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter })

async function createTestData() {
  try {
    console.log('🚀 Creating test member with loans...')

    // 1. Create test member
    const testEmail = 'test@kaplans.co.ke'
    const testPassword = 'test123'
    const hashedTestPassword = await bcrypt.hash(testPassword, 10)

    // Get unique member number
    const lastMember = await prisma.user.findFirst({
      where: { role: 'MEMBER' },
      orderBy: { memberNumber: 'desc' },
    })

    let memberNumber = 'KAP001'
    if (lastMember) {
      const num = parseInt(lastMember.memberNumber.replace('KAP', ''))
      memberNumber = `KAP${String(num + 1).padStart(3, '0')}`
    }

    const testUser = await prisma.user.upsert({
      where: { email: testEmail },
      update: {},
      create: {
        email: testEmail,
        password: hashedTestPassword,
        firstName: 'Test',
        lastName: 'Member',
        phone: '0712345678',
        idNumber: 'TEST001',
        memberNumber: memberNumber,
        role: 'MEMBER',
        status: 'ACTIVE',
        monthlyContribution: 1000,
        shares: 5,
        savingsBalance: 15000,
        physicalAddress: '123 Test Street, Kisii',
        postalAddress: 'P.O. Box 123, Kisii',
      },
    })
    console.log('✅ Test member created:', testUser.email)
    console.log('   Member Number:', testUser.memberNumber)

    // 2. Create 3 months contribution history
    const existingContributions = await prisma.contribution.findMany({
      where: { userId: testUser.id },
    })

    if (existingContributions.length === 0) {
      console.log('📝 Creating contribution history...')
      const months = [
        new Date(2026, 3, 1), // April
        new Date(2026, 4, 1), // May
        new Date(2026, 5, 1), // June
      ]

      for (let i = 0; i < months.length; i++) {
        const month = months[i]
        const receiptNo = `CTR-TEST-${Date.now()}-${i}`
        
        await prisma.contribution.create({
          data: {
            userId: testUser.id,
            month: month,
            amount: 1000,
            paidDate: new Date(month.getFullYear(), month.getMonth(), 15),
            status: 'PAID',
            receiptNo: receiptNo,
          },
        })
        console.log(`  ✓ ${month.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} - Kshs 1,000`)
      }
    } else {
      console.log('📝 Contributions already exist:', existingContributions.length)
    }

    // 3. Create test loans
    const existingLoans = await prisma.loan.findMany({
      where: { userId: testUser.id },
    })

    if (existingLoans.length === 0) {
      console.log('📝 Creating test loans...')

      // Pending loan
      await prisma.loan.create({
        data: {
          userId: testUser.id,
          amount: 50000,
          interestRate: 0.12,
          totalRepayable: 56000,
          monthlyInstallment: 1555.56,
          termMonths: 36,
          purpose: 'Business expansion - pending approval',
          status: 'PENDING',
          dueDate: new Date(2027, 5, 1),
          createdAt: new Date(2026, 5, 20),
        },
      })
      console.log(`  ✓ Pending loan: Kshs 50,000`)

      // Approved loan
      const approvedLoan = await prisma.loan.create({
        data: {
          userId: testUser.id,
          amount: 100000,
          interestRate: 0.12,
          totalRepayable: 112000,
          monthlyInstallment: 3111.11,
          termMonths: 36,
          purpose: 'Home renovation - approved',
          status: 'APPROVED',
          approvalDate: new Date(2026, 5, 25),
          dueDate: new Date(2027, 5, 25),
          createdAt: new Date(2026, 5, 15),
        },
      })
      console.log(`  ✓ Approved loan: Kshs 100,000`)

      // Add payment to approved loan
      await prisma.loanPayment.create({
        data: {
          loanId: approvedLoan.id,
          amount: 3111.11,
          paymentDate: new Date(2026, 6, 10),
          receiptNo: `LPMT-TEST-${Date.now()}-1`,
          status: 'COMPLETED',
        },
      })
      console.log(`    ✓ Payment made: Kshs 3,111.11`)

      // Disbursed loan
      const disbursedLoan = await prisma.loan.create({
        data: {
          userId: testUser.id,
          amount: 75000,
          interestRate: 0.12,
          totalRepayable: 84000,
          monthlyInstallment: 2333.33,
          termMonths: 36,
          purpose: 'Vehicle purchase - disbursed',
          status: 'DISBURSED',
          approvalDate: new Date(2026, 4, 10),
          disbursementDate: new Date(2026, 4, 15),
          dueDate: new Date(2027, 4, 15),
          createdAt: new Date(2026, 4, 5),
        },
      })
      console.log(`  ✓ Disbursed loan: Kshs 75,000`)

      // Add payments to disbursed loan
      for (let i = 0; i < 2; i++) {
        await prisma.loanPayment.create({
          data: {
            loanId: disbursedLoan.id,
            amount: 2333.33,
            paymentDate: new Date(2026, 5 + i, 10),
            receiptNo: `LPMT-TEST-${Date.now()}-${i + 2}`,
            status: 'COMPLETED',
          },
        })
      }
      console.log(`    ✓ 2 payments made: Kshs 4,666.66`)

      // Rejected loan
      await prisma.loan.create({
        data: {
          userId: testUser.id,
          amount: 30000,
          interestRate: 0.12,
          totalRepayable: 33600,
          monthlyInstallment: 933.33,
          termMonths: 36,
          purpose: 'Personal expenses - rejected',
          status: 'REJECTED',
          dueDate: new Date(2027, 3, 1),
          createdAt: new Date(2026, 3, 10),
        },
      })
      console.log(`  ✓ Rejected loan: Kshs 30,000`)
    } else {
      console.log('📝 Loans already exist:', existingLoans.length)
    }

    console.log('\n✅ Test data created successfully!')
    console.log('\n📋 Login Credentials:')
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    console.log('👤 Test Member Login:')
    console.log('   Email: test@kaplans.co.ke')
    console.log('   Password: test123')
    console.log('   Member Number:', testUser.memberNumber)
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    console.log('\n📊 Test Data Summary:')
    console.log(`   - 1 Test member with 3 months savings history`)
    console.log(`   - 4 Loans: Pending, Approved, Disbursed, Rejected`)
    console.log(`   - 3 Contribution records`)
    console.log(`   - 3 Loan payment records`)

  } catch (error) {
    console.error('❌ Error creating test data:', error)
  } finally {
    await prisma.$disconnect()
  }
}

createTestData()