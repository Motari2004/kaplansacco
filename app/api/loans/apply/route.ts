import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const {
      amount,
      purpose,
      termMonths,
      guarantor1,
      guarantor1Phone,
      guarantor2,
      guarantor2Phone,
    } = body

    // Validate required fields
    if (!amount || !purpose || !guarantor1 || !guarantor1Phone) {
      return NextResponse.json(
        { message: 'All required fields must be filled' },
        { status: 400 }
      )
    }

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      include: {
        loans: {
          where: {
            status: { in: ['PENDING', 'APPROVED', 'DISBURSED'] },
          },
        },
      },
    })

    if (!user) {
      return NextResponse.json(
        { message: 'User not found' },
        { status: 404 }
      )
    }

    // Check if user has 3 months savings history
    const contributions = await prisma.contribution.findMany({
      where: {
        userId: user.id,
        status: 'PAID',
      },
      orderBy: { month: 'desc' },
      take: 3,
    })

    if (contributions.length < 3) {
      return NextResponse.json(
        { message: 'You need at least 3 months of savings history to apply for a loan' },
        { status: 400 }
      )
    }

    // Check loan limit (3 times savings)
    const maxLoanAmount = user.savingsBalance * 3
    if (amount > maxLoanAmount) {
      return NextResponse.json(
        { message: `Loan amount cannot exceed 3 times your savings (Kshs ${maxLoanAmount.toLocaleString()})` },
        { status: 400 }
      )
    }

    // Calculate loan details
    const interestRate = 0.12 // 12% annual
    const term = termMonths || 36
    const interest = amount * interestRate * (term / 12)
    const totalRepayable = amount + interest
    const monthlyInstallment = totalRepayable / term

    // Calculate due date
    const dueDate = new Date()
    dueDate.setMonth(dueDate.getMonth() + term)

    // ✅ FIX: Create loan WITH guarantor fields on the loan record
    const loan = await prisma.loan.create({
      data: {
        userId: user.id,
        amount,
        interestRate,
        termMonths: term,
        totalRepayable,
        monthlyInstallment,
        purpose,
        dueDate,
        status: 'PENDING',
        // ✅ Store guarantors directly on the loan
        guarantor1: guarantor1,
        guarantor1Phone: guarantor1Phone,
        guarantor2: guarantor2 || null,
        guarantor2Phone: guarantor2Phone || null,
      },
    })

    // Create loan application transaction
    await prisma.transaction.create({
      data: {
        userId: user.id,
        type: 'LOAN_DISBURSEMENT',
        amount: amount,
        description: `Loan application #${loan.id}`,
        status: 'PENDING',
        reference: loan.id,
      },
    })

    // ✅ OPTIONAL: Also create Guarantor records if you want to track them separately
    // This is good for keeping a separate guarantor history
    if (guarantor1) {
      await prisma.guarantor.create({
        data: {
          userId: user.id,
          loanId: loan.id, // Link to the loan
          fullName: guarantor1,
          phone: guarantor1Phone,
          status: 'PENDING',
        },
      })
    }

    if (guarantor2) {
      await prisma.guarantor.create({
        data: {
          userId: user.id,
          loanId: loan.id, // Link to the loan
          fullName: guarantor2,
          phone: guarantor2Phone || '',
          status: 'PENDING',
        },
      })
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Loan application submitted successfully',
        loanId: loan.id,
        amount: loan.amount,
        totalRepayable: loan.totalRepayable,
        monthlyInstallment: loan.monthlyInstallment,
        termMonths: loan.termMonths,
        guarantor1: loan.guarantor1,
        guarantor1Phone: loan.guarantor1Phone,
        guarantor2: loan.guarantor2,
        guarantor2Phone: loan.guarantor2Phone,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Loan application error:', error)
    return NextResponse.json(
      { message: 'Loan application failed. Please try again.' },
      { status: 500 }
    )
  }
}