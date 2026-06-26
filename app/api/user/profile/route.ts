import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
        memberNumber: true,
        savingsBalance: true,
        monthlyContribution: true,
        shares: true,
        status: true,
        createdAt: true,
      },
    })

    if (!user) {
      return NextResponse.json(
        { message: 'User not found' },
        { status: 404 }
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

    // Get pending withdrawals count
    const pendingWithdrawals = await prisma.withdrawal.count({
      where: {
        userId: session.user.id,
        status: 'PENDING',
      },
    })

    return NextResponse.json({
      ...user,
      savingsBalance: availableBalance, // Override with actual available balance
      totalContributions,
      totalWithdrawals,
      pendingWithdrawals,
    })
  } catch (error) {
    console.error('Error fetching user profile:', error)
    return NextResponse.json(
      { message: 'Failed to fetch user profile' },
      { status: 500 }
    )
  }
}