import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { memberNumber, amount } = body

    if (!memberNumber || !amount) {
      return NextResponse.json(
        { message: 'Member number and amount are required' },
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

    // Check if registration fee is already paid
    const existingTransaction = await prisma.transaction.findFirst({
      where: {
        userId: user.id,
        type: 'REGISTRATION_FEE',
        status: 'COMPLETED',
      },
    })

    if (existingTransaction) {
      return NextResponse.json(
        { message: 'Registration fee already paid' },
        { status: 400 }
      )
    }

    // Create transaction record for registration fee
    const transaction = await prisma.transaction.create({
      data: {
        userId: user.id,
        type: 'REGISTRATION_FEE',
        amount: amount,
        description: 'Membership registration fee payment',
        status: 'COMPLETED',
        receiptNo: `RCP-${Date.now()}-${Math.random().toString(36).substring(7)}`,
        processedBy: user.id,
      },
    })

    // Update user's savings balance (add registration fee)
    await prisma.user.update({
      where: { id: user.id },
      data: {
        savingsBalance: {
          increment: amount,
        },
      },
    })

    // Update user status to ACTIVE if not already
    if (user.status !== 'ACTIVE') {
      await prisma.user.update({
        where: { id: user.id },
        data: {
          status: 'ACTIVE',
        },
      })
    }

    return NextResponse.json({
      success: true,
      message: 'Registration fee paid successfully',
      transactionId: transaction.id,
      receiptNo: transaction.receiptNo,
    })
  } catch (error) {
    console.error('Payment error:', error)
    return NextResponse.json(
      { message: 'Failed to process payment' },
      { status: 500 }
    )
  }
}