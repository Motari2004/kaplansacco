import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { loanId, amount } = body

    if (!loanId || !amount || amount <= 0) {
      return NextResponse.json(
        { error: 'Invalid payment details' },
        { status: 400 }
      )
    }

    // Check if loan exists and belongs to user
    const loan = await prisma.loan.findUnique({
      where: { id: loanId },
      include: {
        payments: true,
      },
    })

    if (!loan) {
      return NextResponse.json({ error: 'Loan not found' }, { status: 404 })
    }

    if (loan.userId !== session.user.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Only allow payments on disbursed loans
    if (loan.status !== 'DISBURSED') {
      return NextResponse.json(
        { error: 'Payments can only be made on disbursed loans' },
        { status: 400 }
      )
    }

    // Calculate total paid so far
    const totalPaid = loan.payments.reduce((sum: number, p: any) => sum + p.amount, 0)
    const remainingBalance = loan.totalRepayable - totalPaid

    if (amount > remainingBalance) {
      return NextResponse.json(
        { error: `Amount cannot exceed remaining balance of Kshs ${remainingBalance.toLocaleString()}` },
        { status: 400 }
      )
    }

    // Generate receipt number
    const receiptNo = `LPMT-${Date.now()}-${Math.random().toString(36).substring(7)}`

    // Create payment
    const payment = await prisma.loanPayment.create({
      data: {
        loanId: loan.id,
        amount,
        receiptNo,
        status: 'COMPLETED',
        paymentDate: new Date(),
      },
    })

    // Check if loan is fully paid
    const newTotalPaid = totalPaid + amount
    let loanStatus = loan.status

    if (newTotalPaid >= loan.totalRepayable) {
      loanStatus = 'PAID'
    }

    // Update loan status if changed
    if (loanStatus !== loan.status) {
      await prisma.loan.update({
        where: { id: loan.id },
        data: { status: loanStatus },
      })
    }

    // Create transaction record
    await prisma.transaction.create({
      data: {
        userId: session.user.id,
        type: 'LOAN_REPAYMENT',
        amount,
        description: `Loan repayment - ${loan.id.slice(0, 8)}`,
        status: 'COMPLETED',
        receiptNo,
        processedBy: session.user.id,
      },
    })

    return NextResponse.json({
      success: true,
      message: 'Payment recorded successfully',
      payment,
      receiptNo,
      remainingBalance: remainingBalance - amount,
      isFullyPaid: loanStatus === 'PAID',
    })
  } catch (error) {
    console.error('Error processing payment:', error)
    return NextResponse.json(
      { error: 'Failed to process payment' },
      { status: 500 }
    )
  }
}