const { PrismaClient } = require('@prisma/client')
const { PrismaPg } = require('@prisma/adapter-pg')
const bcrypt = require('bcryptjs')
require('dotenv/config')

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter })

async function createTestData() {
  try {
    console.log('🚀 Creating test member John with loans...')

    // ===================== CREATE JOHN =====================
    console.log('\n📝 Creating Member: John Doe...')
    const testEmail = 'john@kaplans.co.ke'
    const testPassword = 'john123'
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
        firstName: 'John',
        lastName: 'Doe',
        phone: '0723456789',
        idNumber: 'TEST002',
        memberNumber: memberNumber,
        role: 'MEMBER',
        status: 'ACTIVE',
        monthlyContribution: 2000,
        shares: 10,
        savingsBalance: 25000,
        physicalAddress: '456 Oak Avenue, Kisii',
        postalAddress: 'P.O. Box 456, Kisii',
      },
    })
    console.log(`✅ Test member created: ${testUser.email}`)
    console.log(`   Member Number: ${testUser.memberNumber}`)

    // ===================== FINISH MONTHLY CONTRIBUTIONS =====================
    console.log('\n📝 Creating 12 months contribution history (full year)...')
    
    // Delete existing contributions first (optional)
    await prisma.contribution.deleteMany({
      where: { userId: testUser.id },
    })
    console.log('  ✓ Cleared existing contributions')

    // Create 12 months of contributions (July 2025 - June 2026)
    const months = []
    for (let i = 0; i < 12; i++) {
      const date = new Date(2025, 6 + i, 1) // Start from July 2025
      if (date.getFullYear() <= 2026) {
        months.push(date)
      }
    }

    for (let i = 0; i < months.length; i++) {
      const month = months[i]
      const receiptNo = `CTR-JOHN-${month.getFullYear()}${String(month.getMonth() + 1).padStart(2, '0')}-${i}`
      
      await prisma.contribution.create({
        data: {
          userId: testUser.id,
          month: month,
          amount: 2000,
          paidDate: new Date(month.getFullYear(), month.getMonth(), 15),
          status: 'PAID',
          receiptNo: receiptNo,
        },
      })
      console.log(`  ✓ ${month.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} - Kshs 2,000`)
    }

    console.log(`\n✅ ${months.length} months of contributions completed!`)

    // ===================== LOANS WITH GUARANTORS =====================
    const existingLoans = await prisma.loan.findMany({
      where: { userId: testUser.id },
    })

    if (existingLoans.length === 0) {
      console.log('\n📝 Creating test loans with guarantors...')

      // 1. Pending loan with guarantors
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
          guarantor1: 'Peter Ochieng',
          guarantor1Phone: '0712345681',
          guarantor2: 'Grace Akinyi',
          guarantor2Phone: '0712345682',
        },
      })
      console.log(`  ✓ Pending loan: Kshs 50,000`)
      console.log(`    👤 Guarantor 1: Peter Ochieng (0712345681)`)
      console.log(`    👤 Guarantor 2: Grace Akinyi (0712345682)`)

      // 2. Approved loan with guarantors
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
          guarantor1: 'David Kiprop',
          guarantor1Phone: '0712345683',
          guarantor2: 'Faith Chepkwony',
          guarantor2Phone: '0712345684',
        },
      })
      console.log(`  ✓ Approved loan: Kshs 100,000`)
      console.log(`    👤 Guarantor 1: David Kiprop (0712345683)`)
      console.log(`    👤 Guarantor 2: Faith Chepkwony (0712345684)`)

      // Add payment to approved loan
      await prisma.loanPayment.create({
        data: {
          loanId: approvedLoan.id,
          amount: 3111.11,
          paymentDate: new Date(2026, 6, 10),
          receiptNo: `LPMT-JOHN-${Date.now()}-1`,
          status: 'COMPLETED',
        },
      })
      console.log(`    ✓ Payment made: Kshs 3,111.11`)

      // 3. Disbursed loan with guarantors
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
          guarantor1: 'James Otieno',
          guarantor1Phone: '0712345685',
          guarantor2: 'Susan Auma',
          guarantor2Phone: '0712345686',
        },
      })
      console.log(`  ✓ Disbursed loan: Kshs 75,000`)
      console.log(`    👤 Guarantor 1: James Otieno (0712345685)`)
      console.log(`    👤 Guarantor 2: Susan Auma (0712345686)`)

      // Add payments to disbursed loan
      for (let i = 0; i < 2; i++) {
        await prisma.loanPayment.create({
          data: {
            loanId: disbursedLoan.id,
            amount: 2333.33,
            paymentDate: new Date(2026, 5 + i, 10),
            receiptNo: `LPMT-JOHN-${Date.now()}-${i + 2}`,
            status: 'COMPLETED',
          },
        })
      }
      console.log(`    ✓ 2 payments made: Kshs 4,666.66`)

      // 4. Rejected loan with guarantors
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
          guarantor1: 'Samuel Maina',
          guarantor1Phone: '0712345687',
          guarantor2: 'Mary Njeri',
          guarantor2Phone: '0712345688',
        },
      })
      console.log(`  ✓ Rejected loan: Kshs 30,000`)
      console.log(`    👤 Guarantor 1: Samuel Maina (0712345687)`)
      console.log(`    👤 Guarantor 2: Mary Njeri (0712345688)`)

    } else {
      console.log(`\n📝 Loans already exist: ${existingLoans.length}`)
    }

    // ===================== SUMMARY =====================
    console.log('\n' + '='.repeat(60))
    console.log('✅ TEST DATA CREATED SUCCESSFULLY!')
    console.log('='.repeat(60))
    console.log('\n📋 Login Credentials:')
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    console.log('👤 John Doe Login:')
    console.log(`   Email: ${testEmail}`)
    console.log(`   Password: ${testPassword}`)
    console.log(`   Member Number: ${testUser.memberNumber}`)
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    
    console.log('\n📊 Test Data Summary:')
    console.log(`   👤 Member: John Doe (${testUser.memberNumber})`)
    console.log(`   💰 Savings Balance: Kshs ${testUser.savingsBalance.toLocaleString()}`)
    console.log(`   📅 12 Months Contributions: Kshs ${(2000 * 12).toLocaleString()}`)
    console.log(`   🏦 4 Loans created with guarantors:`)
    console.log(`      • Pending: Kshs 50,000`)
    console.log(`      • Approved: Kshs 100,000 (1 payment made)`)
    console.log(`      • Disbursed: Kshs 75,000 (2 payments made)`)
    console.log(`      • Rejected: Kshs 30,000`)
    console.log(`   👥 8 Guarantors assigned across all loans`)

  } catch (error) {
    console.error('❌ Error creating test data:', error)
    console.log('\n💡 Troubleshooting:')
    console.log('1. Check DATABASE_URL in .env file')
    console.log('2. Run: npx prisma generate')
    console.log('3. Run: npx prisma db push')
  } finally {
    await prisma.$disconnect()
  }
}

createTestData()