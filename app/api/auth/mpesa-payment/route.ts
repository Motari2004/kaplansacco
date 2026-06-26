import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { memberNumber, amount, phoneNumber } = body

    if (!memberNumber || !amount || !phoneNumber) {
      return NextResponse.json(
        { message: 'Member number, amount, and phone number are required' },
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

    // Generate a unique transaction ID
    const transactionId = `MPESA-${Date.now()}-${Math.random().toString(36).substring(7)}`

    // Create a pending transaction
    const transaction = await prisma.transaction.create({
      data: {
        userId: user.id,
        type: 'REGISTRATION_FEE',
        amount: amount,
        description: `M-Pesa registration fee payment - ${phoneNumber}`,
        status: 'PENDING',
        receiptNo: transactionId,
        processedBy: user.id,
        reference: transactionId,
      },
    })

    // Here you would integrate with M-Pesa API to send STK Push
    // For now, we'll simulate a successful STK Push
    // In production, you would call the Safaricom M-Pesa API here

    return NextResponse.json({
      success: true,
      message: 'STK Push sent successfully',
      transactionId: transactionId,
      phoneNumber: phoneNumber,
      amount: amount,
      status: 'PENDING',
      merchantRequestId: `MR-${Date.now()}`,
      checkoutRequestId: `CR-${Date.now()}`,
    })
  } catch (error) {
    console.error('M-Pesa payment error:', error)
    return NextResponse.json(
      { message: 'Failed to process M-Pesa payment' },
      { status: 500 }
    )
  }
}