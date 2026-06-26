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
    const { amount, method, bankName, accountNumber, accountName, phoneNumber, network } = body

    // Validate amount
    if (!amount || amount < 100) {
      return NextResponse.json(
        { message: 'Minimum withdrawal amount is Kshs 100' },
        { status: 400 }
      )
    }

    // Get total contributions (monthly deposits)
    const contributions = await prisma.contribution.aggregate({
      where: {
        userId: session.user.id,
        status: 'PAID',
      },
      _sum: {
        amount: true,
      },
    })

    const totalContributions = contributions._sum.amount || 0

    // Get total withdrawals (approved only)
    const withdrawals = await prisma.withdrawal.aggregate({
      where: {
        userId: session.user.id,
        status: 'COMPLETED',
      },
      _sum: {
        amount: true,
      },
    })

    const totalWithdrawals = withdrawals._sum.amount || 0

    // Available balance = Total Contributions - Total Withdrawals
    const availableBalance = totalContributions - totalWithdrawals

    // Check if user has enough balance
    if (amount > availableBalance) {
      return NextResponse.json(
        { message: `Amount cannot exceed your available balance of Kshs ${availableBalance.toLocaleString()}` },
        { status: 400 }
      )
    }

    // Validate based on withdrawal method
    let withdrawalData: any = {
      userId: session.user.id,
      amount: amount,
      method: method,
      status: 'PENDING',
    }

    if (method === 'mpesa') {
      if (!phoneNumber || phoneNumber.length < 10) {
        return NextResponse.json(
          { message: 'Please provide a valid M-Pesa phone number' },
          { status: 400 }
        )
      }
      withdrawalData.phoneNumber = phoneNumber
    } else if (method === 'bank') {
      if (!bankName || !accountNumber || !accountName) {
        return NextResponse.json(
          { message: 'Please provide all bank details' },
          { status: 400 }
        )
      }
      withdrawalData.bankName = bankName
      withdrawalData.accountNumber = accountNumber
      withdrawalData.accountName = accountName
    } else {
      return NextResponse.json(
        { message: 'Invalid withdrawal method' },
        { status: 400 }
      )
    }

    // Create withdrawal record with PENDING status
    const withdrawal = await prisma.withdrawal.create({
      data: withdrawalData,
    })

    // Create transaction record
    await prisma.transaction.create({
      data: {
        userId: session.user.id,
        type: 'WITHDRAWAL',
        amount: amount,
        description: `${method === 'mpesa' ? 'M-Pesa' : 'Bank'} withdrawal request (Pending)`,
        status: 'PENDING',
        receiptNo: `WTH-${Date.now()}-${Math.random().toString(36).substring(7)}`,
        processedBy: session.user.id,
        reference: withdrawal.id,
      },
    })

    // Update user's savingsBalance (deduct immediately)
    await prisma.user.update({
      where: { id: session.user.id },
      data: {
        savingsBalance: {
          decrement: amount,
        },
      },
    })

    return NextResponse.json({
      success: true,
      message: `Withdrawal request of Kshs ${amount.toLocaleString()} submitted successfully. It's pending approval.`,
      withdrawal: {
        id: withdrawal.id,
        amount: amount,
        method: method,
        status: 'PENDING',
        createdAt: withdrawal.createdAt,
      },
    })
  } catch (error) {
    console.error('Withdrawal error:', error)
    return NextResponse.json(
      { message: 'Failed to process withdrawal request' },
      { status: 500 }
    )
  }
}