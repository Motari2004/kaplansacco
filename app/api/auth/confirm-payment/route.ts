import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { memberNumber, transactionId } = body

    if (!memberNumber || !transactionId) {
      return NextResponse.json(
        { message: 'Member number and transaction ID are required' },
        { status: 400 }
      )
    }

    // Find the user by member number
    const user = await prisma.user.findUnique({
      where: { memberNumber: memberNumber },
    })

    if (!user) {
      return NextResponse.json(
        { message: 'Member not found' },
        { status: 404 }
      )
    }

    // Find the transaction
    const transaction = await prisma.transaction.findFirst({
      where: {
        userId: user.id,
        reference: transactionId,
        type: 'REGISTRATION_FEE',
      },
    })

    if (!transaction) {
      return NextResponse.json(
        { message: 'Transaction not found' },
        { status: 404 }
      )
    }

    if (transaction.status === 'COMPLETED') {
      return NextResponse.json({
        success: true,
        message: 'Payment already confirmed',
        status: 'COMPLETED',
      })
    }

    // In production, you would verify with M-Pesa API here
    // For demo, we'll simulate successful payment

    // Update transaction status to COMPLETED
    await prisma.transaction.update({
      where: { id: transaction.id },
      data: {
        status: 'COMPLETED',
      },
    })

    // Update user's savings balance (add registration fee)
    await prisma.user.update({
      where: { id: user.id },
      data: {
        savingsBalance: {
          increment: transaction.amount,
        },
        status: 'ACTIVE',
      },
    })

    return NextResponse.json({
      success: true,
      message: 'Payment confirmed successfully',
      status: 'COMPLETED',
      receiptNo: transaction.receiptNo,
    })
  } catch (error) {
    console.error('Payment confirmation error:', error)
    return NextResponse.json(
      { message: 'Failed to confirm payment' },
      { status: 500 }
    )
  }
}